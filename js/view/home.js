import { randomWordFromVocabulary } from "../controller/randomizer.js";

// start json server
const url = "http://localhost:3000/vocabulary";

const formGetNewWord = document.getElementById("form_get_new_word");
const currentWord = document.getElementById("current_word");
const inputWord = document.getElementById("input_vocabulary");
const headingText = document.getElementById("popup_heading");
const text = document.getElementById("popup_text");
const popupButton = document.getElementById("popup_button");

let currentVocabulary = "hi";

// TODO: Look at current Word and see if u typed it right

async function submitWord(event) {
  event.preventDefault();

  const vocabularyList = await getNewWord();
  currentVocabulary = randomWordFromVocabulary(vocabularyList);
  currentWord.innerText = currentVocabulary["word-english"];

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

function popup(event) {
  headingText.innerText = "Right or Wrong";
  text.innerText = `
  Solution: ${inputWord.value} (Input)
  Solution: ${currentVocabulary["word-korean"]} (Correct)
  
  Current Word: ${currentWord.innerText} (English)
  Current Word: ${currentVocabulary["word-german"]} (German)

  Pronuanciation: ${currentVocabulary["pron-korean"]}

  Keyboard: ${currentVocabulary["kb-english"]} (English)
  Keyboard: ${currentVocabulary["kb-german"]} (German)
  `;
}

formGetNewWord.addEventListener("submit", submitWord);
popupButton.addEventListener("click", popup);
