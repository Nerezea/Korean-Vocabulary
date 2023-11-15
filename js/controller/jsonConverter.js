export function jsonConverterWords(json) {
  const arrayModified = json.map((obj) => {
    return {
      word_german: obj["word-german"],
      word_english: obj["word-english"],
      word_korean: obj["word-korean"],
      pron_korean: obj["pron-korean"],
      kb_german: obj["kb-german"],
      kb_english: obj["kb-english"],
    };
  });

  return arrayModified;
}
