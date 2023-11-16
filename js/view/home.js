import { randomWordFromVocabulary } from "../controller/randomizer.js";

// start json server
const url = "http://localhost:3000/vocabulary";

const formGetNewWord = document.getElementById("form_get_new_word");
const currentWord = document.getElementById("current_word");
const inputWord = document.getElementById("input_vocabulary");
const headingText = document.getElementById("popup_heading");
const text = document.getElementById("popup_text");

// TODO: Look at current Word and see if u typed it right

async function submitWord(event) {
  event.preventDefault();

  const vocabularyList = await getNewWord();
  currentWord.innerText = randomWordFromVocabulary(vocabularyList);

  console.log(currentWord.innerText);
  console.log(inputWord.value);
  console.log(headingText.innerText);
  console.log(text.innerText);

  formGetNewWord.reset();
}

const getNewWord = async () => {
  try {
    const response = await fetch(url);
    const vocabulary = await response.json();
    return vocabulary;
  } catch (error) {
    console.log(error);
  }
};

formGetNewWord.addEventListener("submit", submitWord);
