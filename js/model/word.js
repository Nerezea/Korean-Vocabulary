import { Schema, model } from "mongoose";

const wordSchema = new Schema({
  word_german: { type: String, required: true },
  word_english: { type: String, required: true },
  word_korean: { type: String, required: true },
  pron_korean: { type: String, required: true },
  kb_german: { type: String, required: true },
  kb_english: { type: String, required: true },
});

const Word = new model("words", wordSchema);

export default Word;
