// make keyboard
let letters = document.querySelectorAll(`.letter`);
let input = document.querySelector("#input");

function highlight(e) {
  for (i = 0; i < letters.length; i++) {
    if (letters[i].dataset.letter == e.key) {
      letters[i].classList.add("active")
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

function unClick(e) {
  console.log(e.key);
  for (i = 0; i < letters.length; i++) {
    if (letters[i].dataset.letter == e.key) {
      letters[i].classList.remove("active")
    }
    input.value = ""
  }
}
input.addEventListener("keydown", highlight)
input.addEventListener("keyup", unClick)

//list of words
let words = ["COLLISION", "MECHANICAL", "TEMPERATURE", "PRIMITIVE", "BARNACLE", "FEROCITY", "PANORAMIC", "HOMEOSTASIS", "JUBILATION", "SPIRITUAL", "VICHYSSOISE", "VAUDEVILLE", "VICISSITUDE", "CARNIVAL", "MNEMONIC", "PSEUDONYM", "BUFFLEHEAD", "QUANDARY", "TRANSPARENT", "ODYSSEY", "CARICATURE", "FLIPPANT", "KALEIDOSCOPE", "EGREGIOUS", "INFORMATIVE", "OSTEOPOROSIS", "UMBRIA", "ICICLE", "ATROPHY", "ABDICATE", "EMULSIFY", "YTTRIUM", "DIABOLICAL", "XYLENE", "PREEMPTIVE", "INGRATIATE", "OMNISCIENT", "INDUBITABLE", "ZIGGURAT", "OSPREY"]
//define variables - answer, guessed letters, etc etc baruch hashem
let game = true
let answer = ""
let attemptsLeft = 6
let guessedLetters = []
let used = []

let tries = document.querySelector(".remaining");

//randomize word
function randomizeWord() {
  answer = words[Math.floor(Math.random() * words.length)]
  return answer
}
console.log(randomizeWord());

//select randomizeWord() and leave spaces
//^^splice randomized word? and unshift? into used array and pull word from used[0]
used.unshift(answer)
wordLength = used[0].length
console.log(used[0]);
console.log(wordLength);
//function for _ depicting letters amount
// let unknown = document.querySelector(".unknown");
function mysteryWord() {
  wordSpaces = answer.split("").map(letter => (guessedLetters.indexOf(letter) >= 0 ? letter : " _ ")).join("")

  document.querySelector(".unknown").innerHTML = wordSpaces;
  
}
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
  mysteryWord()
  console.log(randomizeWord());
}


mysteryWord()