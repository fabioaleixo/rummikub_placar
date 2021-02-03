const initScreen = document.getElementById("telaInical");
const numPlayers = document.getElementById("numPlayers");
const namesContainer = document.getElementById("namesContainer");
const namesWrapper = document.getElementById("names");
const start = document.getElementById("inicairPartida");
const pontuationScreen = document.getElementById("telaPontuacao");
let totalPlayers = 0;
const allPlayers = [];
const calculateWinner = document.getElementById("calculateWinner");
const allInputs = document.getElementsByTagName("input");
const newGame = document.getElementById("newGame");

newGame.addEventListener("click", () => {
  window.location.reload();
});

const reducer = (total, num) => {
  return total + num;
};

calculateWinner.addEventListener("click", () => {
  let match1 = document.getElementsByClassName("match1");
  let match2 = document.getElementsByClassName("match2");
  let match3 = document.getElementsByClassName("match3");
  let match4 = document.getElementsByClassName("match4");
  if (totalPlayers == 1) {
    for (let i = 0; i < match1.length; i++) {
      match1[0].value == 0
        ? (match1[0].value = Math.abs(match1[1].value))
        : (match1[0].value = match1[0].value);
      match1[1].value == 0
        ? (match1[1].value = Math.abs(match1[0].value))
        : (match1[1].value = match1[1].value);
      match2[0].value == 0
        ? (match2[0].value = Math.abs(match2[1].value))
        : (match2[0].value = match2[0].value);
      match2[1].value == 0
        ? (match2[1].value = Math.abs(match2[0].value))
        : (match2[1].value = match2[1].value);
      match3[0].value == 0
        ? (match3[0].value = Math.abs(match3[1].value))
        : (match3[0].value = match3[0].value);
      match3[1].value == 0
        ? (match3[1].value = Math.abs(match3[0].value))
        : (match3[1].value = match3[1].value);
      match4[0].value == 0
        ? (match4[0].value = Math.abs(match4[1].value))
        : (match4[0].value = match4[0].value);
      match4[1].value == 0
        ? (match4[1].value = Math.abs(match4[0].value))
        : (match4[1].value = match4[1].value);
    }
  } else if (totalPlayers == 2) {
    match1[0].value == 0
      ? (match1[0].value = Math.abs(
          parseFloat(match1[1].value) + parseFloat(match1[2].value)
        ))
      : (match1[0].value = match1[0].value);
    match1[1].value == 0
      ? (match1[1].value = Math.abs(
          parseFloat(match1[0].value) + parseFloat(match1[2].value)
        ))
      : (match1[1].value = match1[1].value);
    match1[2].value == 0
      ? (match1[2].value = Math.abs(
          parseFloat(match1[0].value) + parseFloat(match1[1].value)
        ))
      : (match1[2].value = match1[2].value);
    match2[0].value == 0
      ? (match2[0].value = Math.abs(
          parseFloat(match2[1].value) + parseFloat(match2[2].value)
        ))
      : (match2[0].value = match2[0].value);
    match2[1].value == 0
      ? (match2[1].value = Math.abs(
          parseFloat(match2[0].value) + parseFloat(match2[2].value)
        ))
      : (match2[1].value = match2[1].value);
    match2[2].value == 0
      ? (match2[2].value = Math.abs(
          parseFloat(match2[0].value) + parseFloat(match2[1].value)
        ))
      : (match2[2].value = match2[2].value);
    match3[0].value == 0
      ? (match3[0].value = Math.abs(
          parseFloat(match3[1].value) + parseFloat(match3[2].value)
        ))
      : (match3[0].value = match3[0].value);
    match3[1].value == 0
      ? (match3[1].value = Math.abs(
          parseFloat(match3[0].value) + parseFloat(match3[2].value)
        ))
      : (match3[1].value = match3[1].value);
    match3[2].value == 0
      ? (match3[2].value = Math.abs(
          parseFloat(match3[0].value) + parseFloat(match3[1].value)
        ))
      : (match3[2].value = match3[2].value);
    match4[0].value == 0
      ? (match4[0].value = Math.abs(
          parseFloat(match4[1].value) + parseFloat(match4[2].value)
        ))
      : (match4[0].value = match4[0].value);
    match4[1].value == 0
      ? (match4[1].value = Math.abs(
          parseFloat(match4[0].value) + parseFloat(match4[2].value)
        ))
      : (match4[1].value = match4[1].value);
    match4[2].value == 0
      ? (match4[2].value = Math.abs(
          parseFloat(match4[0].value) + parseFloat(match4[1].value)
        ))
      : (match4[2].value = match4[2].value);
  } else if (totalPlayers == 3) {
    match1[0].value == 0
      ? (match1[0].value = Math.abs(
          parseFloat(match1[1].value) +
            parseFloat(match1[2].value) +
            parseFloat(match1[3].value)
        ))
      : (match1[0].value = match1[0].value);
    match1[1].value == 0
      ? (match1[1].value = Math.abs(
          parseFloat(match1[0].value) +
            parseFloat(match1[2].value) +
            parseFloat(match1[3].value)
        ))
      : (match1[1].value = match1[1].value);
    match1[2].value == 0
      ? (match1[2].value = Math.abs(
          parseFloat(match1[0].value) +
            parseFloat(match1[1].value) +
            parseFloat(match1[3].value)
        ))
      : (match1[2].value = match1[2].value);
    match1[3].value == 0
      ? (match1[3].value = Math.abs(
          parseFloat(match1[0].value) +
            parseFloat(match1[1].value) +
            parseFloat(match1[2].value)
        ))
      : (match1[3].value = match1[3].value);
    match2[0].value == 0
      ? (match2[0].value = Math.abs(
          parseFloat(match2[1].value) +
            parseFloat(match2[2].value) +
            parseFloat(match2[3].value)
        ))
      : (match2[0].value = match2[0].value);
    match1[1].value == 0
      ? (match2[1].value = Math.abs(
          parseFloat(match2[0].value) +
            parseFloat(match2[2].value) +
            parseFloat(match2[3].value)
        ))
      : (match2[1].value = match2[1].value);
    match2[2].value == 0
      ? (match2[2].value = Math.abs(
          parseFloat(match2[0].value) +
            parseFloat(match2[1].value) +
            parseFloat(match2[3].value)
        ))
      : (match2[2].value = match2[2].value);
    match2[3].value == 0
      ? (match2[3].value = Math.abs(
          parseFloat(match2[0].value) +
            parseFloat(match2[1].value) +
            parseFloat(match2[2].value)
        ))
      : (match2[3].value = match2[3].value);
    match3[0].value == 0
      ? (match3[0].value = Math.abs(
          parseFloat(match3[1].value) +
            parseFloat(match3[2].value) +
            parseFloat(match3[3].value)
        ))
      : (match3[0].value = match3[0].value);
    match3[1].value == 0
      ? (match3[1].value = Math.abs(
          parseFloat(match3[0].value) +
            parseFloat(match3[2].value) +
            parseFloat(match3[3].value)
        ))
      : (match3[1].value = match3[1].value);
    match3[2].value == 0
      ? (match3[2].value = Math.abs(
          parseFloat(match3[0].value) +
            parseFloat(match3[1].value) +
            parseFloat(match3[3].value)
        ))
      : (match3[2].value = match3[2].value);
    match3[3].value == 0
      ? (match3[3].value = Math.abs(
          parseFloat(match3[0].value) +
            parseFloat(match3[1].value) +
            parseFloat(match3[2].value)
        ))
      : (match3[3].value = match3[3].value);
    match4[0].value == 0
      ? (match4[0].value = Math.abs(
          parseFloat(match4[1].value) +
            parseFloat(match4[2].value) +
            parseFloat(match4[3].value)
        ))
      : (match4[0].value = match4[0].value);
    match1[1].value == 0
      ? (match4[1].value = Math.abs(
          parseFloat(match4[0].value) +
            parseFloat(match4[2].value) +
            parseFloat(match4[3].value)
        ))
      : (match4[1].value = match4[1].value);
    match4[2].value == 0
      ? (match4[2].value = Math.abs(
          parseFloat(match4[0].value) +
            parseFloat(match4[1].value) +
            parseFloat(match4[3].value)
        ))
      : (match4[2].value = match4[2].value);
    match4[3].value == 0
      ? (match4[3].value = Math.abs(
          parseFloat(match4[0].value) +
            parseFloat(match4[1].value) +
            parseFloat(match4[2].value)
        ))
      : (match4[3].value = match4[3].value);
  }
  for (let i = 0; i <= totalPlayers; i++) {
    let insertedPoints = document.getElementsByClassName("id" + i);
    let showResult = document.getElementById("total" + i);
    let totalOfPoints = [];
    for (let i = 0; i < insertedPoints.length; i++) {
      totalOfPoints[i] = parseInt(insertedPoints[i].value);
      let result = totalOfPoints.reduce(reducer);
      showResult.value = result;
    }
  }
});

const inputFocus = () => {
  for (let i = 0; i < allInputs.length; i++) {
    allInputs[i].addEventListener("focus", (e) => {
      e.target.value == 0
        ? (e.target.value = "")
        : (e.target.value = e.target.value);
    });
    allInputs[i].addEventListener("focusout", (e) => {
      e.target.value == ""
        ? (e.target.value = 0)
        : (e.target.value = e.target.value);
    });
  }
};

const createPontuationInputs = (numberOfInputs, index) => {
  for (let i = 0; i < numberOfInputs; i++) {
    let id = i + 1;
    let inputPontuation = document.createElement("input");
    inputPontuation.setAttribute("class", "id" + index + " match" + id);
    inputPontuation.setAttribute("type", "text");
    inputPontuation.setAttribute("value", "0");
    pontuationScreen.appendChild(inputPontuation);
    totalPlayers = index;
  }
  let inputTotal = document.createElement("input");
  inputTotal.setAttribute("id", "total" + index);
  inputTotal.setAttribute("type", "text");
  inputTotal.setAttribute("placeholder", "Valor total");
  inputTotal.disabled = true;
  pontuationScreen.appendChild(inputTotal);
  inputFocus();
};

const createPontuationScreen = () => {
  allPlayers.forEach((player, index) => {
    let name = document.createElement("p");
    let nameValue = document.createTextNode(player);
    name.appendChild(nameValue);
    pontuationScreen.appendChild(name);
    createPontuationInputs(4, index);
  });
};

const pushNames = () => {
  const inputs = document.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    allPlayers.push(inputs[i].value);
  }
  createPontuationScreen();
};

start.addEventListener("click", () => {
  initScreen.style.display = "none";
  pontuationScreen.style.display = "block";
  newGame.style.display = "block";
  pushNames();
});

const createInputNames = (players) => {
  namesWrapper.innerHTML = "";
  for (let i = 0; i < players; i++) {
    const inputName = document.createElement("input");
    namesWrapper.appendChild(inputName);
    inputName.setAttribute("type", "text");
  }
  namesContainer === ""
    ? (namesContainer.style.display = "block")
    : (namesContainer.style.display = "block");
};

numPlayers.addEventListener("change", (e) => {
  createInputNames(e.target.value);
});
