import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Word from "../js/model/word.js";
import { jsonConverterWords } from "../js/controller/jsonConverter.js";
import vocabularyArray from "../json/vocabulary.json" assert { type: "json" };

dotenv.config();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
const app = express();

app.use(express.json());

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connected to MongoDB with mongoose");
  })
  .catch(() => {
    console.log("Connection failed");
  });

app.post("/createWord", async (req, res) => {
  try {
    const word = new Word(req.body);
    const response = await word.save();
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send(`Failed: ${error.message}`);
  }
});

app.post("/updateVocabularyWords", async (req, res) => {
  try {
    const jsonArray = jsonConverterWords(vocabularyArray.vocabulary);

    jsonArray.forEach(async (element) => {
      const { word_german } = element;
      const exist = await Word.findOne({ word_german: word_german });
      if (exist === null) {
        const word = new Word(element);
        word.save();
      }
    });
    res.status(200).send("Updated the Vocabulary List");
  } catch (error) {
    res.status(400).send(`Failed: ${error.message}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
