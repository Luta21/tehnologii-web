function occurence(text, character) {
  return text.split(character).length - 1;
}

console.log(occurence("text", "t"));
