// make keyboard
let letters = document.querySelectorAll(`.letter`);
let input = document.querySelector("#input");

//list of words
let words = [
  "COLLISION",
  "MECHANICAL",
  "TEMPERATURE",
  "PRIMITIVE",
  "BARNACLE",
  "FEROCITY",
  "PANORAMIC",
  "HOMEOSTASIS",
  "JUBILATION",
  "SPIRITUAL",
  "VICHYSSOISE",
  "VAUDEVILLE",
  "VICISSITUDE",
  "CARNIVAL",
  "MNEMONIC",
  "PSEUDONYM",
  "BUFFLEHEAD",
  "QUANDARY",
  "TRANSPARENT",
  "ODYSSEY",
  "CARICATURE",
  "FLIPPANT",
  "KALEIDOSCOPE",
  "EGREGIOUS",
  "INFORMATIVE",
  "OSTEOPOROSIS",
  "PENUMBRA",
  "ICICLE",
  "ATROPHY",
  "ABDICATE",
  "EMULSIFY",
  "YTTRIUM",
  "DIABOLICAL",
  "XYLENE",
  "PREEMPTIVE",
  "INGRATIATE",
  "OMNISCIENT",
  "INDUBITABLE",
  "ZIGGURAT",
  "OSPREY",
  "ARITHMETIC",
  "CATACLYSMIC",
  "ABYSS",
  "QUORUM",
  "WHIMSICAL",
  "YARMULKE",
  "YOLK",
  "AGNOSTIC",
  "HIEROGLYPH",
  "EUKARYOTE",
  "ASKEW",
  "INDIGO",
  "QUIZZICAL",
  "TAUTOLOGY",
  "ANGIOPLASTY",
  "LIQUID",
  "AUSPICIOUS",
  "AMBIVALENT",
];

//define variables - answer, guessed letters, etc etc
let answer = "";
let guessedLetters = [];
let usedWords = [];

let tries = document.querySelector(".remaining");
let wins = document.querySelector(".dubs");
let losses = document.querySelector(".wrong");

let winScore = 0;
let lossScore = 0;

function highlight(e) {
  for (i = 0; i < letters.length; i++) {
    if (letters[i].dataset.letter == e.key) {
      letters[i].classList.add("active");
      //turn input to lower case (uppercase not recognized)
      answer = answer.toLowerCase();
      let curLet = letters[i];
      if (answer.includes(e.key)) {
        let results = [];
        letters[i].style.background = "green";
        // returns index of current letter
        function finder() {
          let index = answer.indexOf(curLet.innerHTML);
          //look through word for every index of current letter
          while (index != -1) {
            results.push(index);
            index = answer.indexOf(curLet.innerHTML, index + 1);
          }
          return results;
        }
        finder();
        results.forEach((result) =>
          newWord.splice(result, 1, curLet.innerHTML)
        );
        unknown.innerHTML = newWord.join("");

        if (!unknown.innerHTML.includes("-") && tries.innerText > 0) {
          winScore += 1;
          wins.innerText = winScore;
          input.classList.add("hidden");
          unClick(e);
          alert(`You Win! The word was ${answer}.`);
        }
      } else if (!answer.includes(e.key)) {
        if (letters[i].style.background !== "red") {
          letters[i].style.background = "red";
          tries.innerText -= 1;
          if (tries.innerText < 1) {
            lossScore += 1;
            losses.innerText = lossScore;
            input.classList.add("hidden");
            unClick(e);
            alert(`You Lose! The word was ${answer}.`);
          }
        }
      }
    }
  }
}

function unClick(e) {
  for (i = 0; i < letters.length; i++) {
    if (letters[i].dataset.letter == e.key) {
      letters[i].classList.remove("active");
    }
    input.value = "";
  }
}
input.addEventListener("keydown", highlight);
input.addEventListener("keyup", unClick);

function randomizeWord() {
  if (words.length === 0) {
    console.log(usedWords);
    words = usedWords;
    console.log(words);
    usedWords = [];
  }
  answer = words[Math.floor(Math.random() * words.length)];
  return answer;
}

let unknown = document.querySelector(".unknown");
let startBtn = document.querySelector(".start");
let blankWord = "";
let newWord = [];
let count = document.querySelector(".count");

function createBlank() {
  clearBoardStyles();
  tries.innerText = 6;
  guessedLetters = [];
  randomizeWord();
  usedWords.push(answer);
  for (let i = 0; i < words.length; i++) {
    if (words[i] === answer) {
      words.splice(i, 1);
    }
  }
  blankWord = "";
  for (let i = 0; i < answer.length; i++) {
    blankWord += "-";
  }
  unknown.innerHTML = blankWord;

  newWord = blankWord.split("");
  count.innerText = answer.length;
}
createBlank();
startBtn.addEventListener("click", createBlank);

function clearBoardStyles() {
  letters.forEach((letter) => {
    letter.style.background = "";
    letter.classList.remove("active");
    input.value = "";
    input.classList.remove("hidden");
  });
}
