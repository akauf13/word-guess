// make keyboard
let letters = document.querySelectorAll(`.letter`);
let input = document.querySelector("#input");

//list of words
let words = ["COLLISION", "MECHANICAL", "TEMPERATURE", "PRIMITIVE", "BARNACLE", "FEROCITY", "PANORAMIC", "HOMEOSTASIS", "JUBILATION", "SPIRITUAL", "VICHYSSOISE", "VAUDEVILLE", "VICISSITUDE", "CARNIVAL", "MNEMONIC", "PSEUDONYM", "BUFFLEHEAD", "QUANDARY", "TRANSPARENT", "ODYSSEY", "CARICATURE", "FLIPPANT", "KALEIDOSCOPE", "EGREGIOUS", "INFORMATIVE", "OSTEOPOROSIS", "UMBRIA", "ICICLE", "ATROPHY", "ABDICATE", "EMULSIFY", "YTTRIUM", "DIABOLICAL", "XYLENE", "PREEMPTIVE", "INGRATIATE", "OMNISCIENT", "INDUBITABLE", "ZIGGURAT", "OSPREY"]

//define variables - answer, guessed letters, etc etc baruch hashem
let game = true
let answer = ""
let attemptsLeft = 6
let guessedLetters = []
let usedWords = []

//highlight key being typed
function highlight(e) {
  for (i = 0; i < letters.length; i++) {
    if (letters[i].dataset.letter == e.key) {
      letters[i].classList.add("active")
      //turn input to lower case (uppercase not recognized for some reason)
      answer = answer.toLowerCase()
      console.log(answer);
      //define curLet to current letter pressed
      let curLet = letters[i]
      //if random word(answer) includes key pressed return index of current letter
      if (answer.includes(e.key)) {
        let results = []
        // console.log("Here", wordSpaces);
        // returns index of current letter
        //finds all instances of current letter in the mystery word
        function finder() {
          let index = answer.indexOf(curLet.innerHTML)
          console.log(index, "index");
          //look through word for every index of current letter
          while (index != -1) {
            results.push(index)
            index = answer.indexOf(curLet.innerHTML, index + 1)
          }
          return results
        }
        finder()
        results.forEach(result => newWord.splice(result, 1, curLet.innerHTML))
        unknown.innerHTML = newWord.join("")
      }
      guessedLetters.push(letters[i].dataset.letter)
      console.log(guessedLetters);
      let canPush = true
      guessedLetters.forEach((letter) => {
        if (letter === letters[i].dataset.letter) {
          canPush = false
        }
        else if (canPush = true) {
          guessedLetters.push
        }
      })
    }
  }
}

// letters.forEach(letter => letter.addEventListener("keydown", (e) => {
//   console.log(e.key);
  // if (answer.includes(letter.innerHTML)) {
  //   console.log("here");
  // }
// }))

function unClick(e) {
  // console.log(e.key);
  for (i = 0; i < letters.length; i++) {
    if (letters[i].dataset.letter == e.key) {
      letters[i].classList.remove("active")
    }
    input.value = ""
  }
}
input.addEventListener("keydown", highlight)
input.addEventListener("keyup", unClick)


let tries = document.querySelector(".remaining");

//randomize word
function randomizeWord() {
  answer = words[Math.floor(Math.random() * words.length)]
  return answer
}
console.log(randomizeWord());

//select randomizeWord() and leave spaces
//^^splice randomized word? and unshift? into usedWords array and pull word from usedWords[0]
usedWords.unshift(answer)
wordLength = usedWords[0].length
// console.log(usedWords[0]);
// console.log(wordLength);
//function for _ depicting letters amount
// let unknown = document.querySelector(".unknown");
// function mysteryWord() {
//   wordSpaces = answer.split("").map(letter => (guessedLetters.indexOf(letter) >= 0 ? letter : " _ ")).join("")
//   document.querySelector(".unknown").innerHTML = wordSpaces;
// }
let unknown = document.querySelector(".unknown");
let startBtn = document.querySelector(".start");
let blankWord = ""
let newWord = []

function createBlank() {
  blankWord = ""
  for (let i = 0; i < answer.length; i++) {
    blankWord += "-"
  }
  unknown.innerHTML = blankWord
  newWord = blankWord.split("")
}
startBtn.addEventListener("click", createBlank)


function selectLetter(e) {
  if (guessedLetters.indexOf(e) < 0) {
    attemptsLeft -= 1 
    e.target.remove
  }
  else {

  }
}

tries = attemptsLeft

// toggle letters so they appear if correct
//toggle key so it can't be clicked twice
//make hang stand?
//if wrong build man / lose "life" -subtract 1 from attemptsLeft
// add a score counter
//make buttons for new game or restart

document.querySelector(".reset").addEventListener("click", resetClick)


function resetClick() {
  game = true
  attemptsLeft = 6
  guessedLetters = []
  // gameStatus.innerHTML = currentTurn()
  // document.querySelectorAll(`.cell`).forEach((cell) => (cell.innerHTML = ""))
  randomizeWord()
  // mysteryWord()
  console.log(randomizeWord());
}

// mysteryWord()