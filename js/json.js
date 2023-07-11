// start json server
const url = "http://localhost:3000/vocabulary";
const addNewWordForm = document.getElementById("form_add_new_word");
const deleteWordForm = document.getElementById("form_delete_word");
const addNewGermanWord = document.getElementById("new_german_word");
const addNewEnglishWord = document.getElementById("new_english_word");
const addNewKoreanWord = document.getElementById("new_korean_word");
const addNewPronounciation = document.getElementById("new_pronounciation");
const addNewGermanKeyboard = document.getElementById("new_german_keyboard");
const addNewEnglishKeyboard = document.getElementById("new_english_keyboard");
const deleteWordField = document.getElementById("delete_word");

const addNewWord = (event) => {
  event.preventDefault();

  if (true) {
    let data = {
      "word-german": addNewGermanWord.value,
      "word-english": addNewEnglishWord.value,
      "word-korean": addNewKoreanWord.value,
      "pron-korean": addNewPronounciation.value,
      "kb-german": addNewGermanKeyboard.value,
      "kb-english": addNewEnglishKeyboard.value,
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((inputData) => console.log(inputData))
      .catch((error) => console.log(error));
  }
  addNewWordForm.reset();
};

const deleteID = async (event) => {
  event.preventDefault();
  try {
    let id = deleteWordField.value;
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
  deleteWordForm.reset();
};

addNewWordForm.addEventListener("submit", addNewWord);
deleteWordForm.addEventListener("submit", deleteID);
