import { randomWordFromVocabulary } from "./random.js";

// start json server
const url = "http://localhost:3000/vocabulary";

const formGetNewWord = document.getElementById("form_get_new_word");
const currentWord = document.getElementById("current_word");
const inputWord = document.getElementById("input_vocabulary");

// TODO: Look at current Word and see if u typed it right

async function submitWord(event) {
  event.preventDefault();

  const vocabularyList = await getNewWord();
  currentWord.innerText = randomWordFromVocabulary(vocabularyList);

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
