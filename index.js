const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  // let lowCase = str.toLowerCased();
  // let splitStr = lowCase.split(' ');

  // for (let i = 0; i < splitStr.length; i++) {
  //   splitStr[i] = splitStr[i].slice(0, 1).toUpperCase() + splitStr[i].slice(1);
  // }

  // return splitStr.join(" ");
  const capitalized = tutorials.map((sentence) => {
    const words = sentence.split(' ');
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    return capitalizedWords.join(" ");
  });
  return capitalized;
}