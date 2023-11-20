export function randomWordFromVocabulary(list) {
  let randomNumber = Math.floor(Math.random() * list.length);
  let randomWord = list[randomNumber];
  return randomWord;
}
