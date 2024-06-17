const rollDice = () => {
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const numOfDice = document.getElementById("numOfDice").value;
  let values = [];
  let images = [];
  for (let i = 0; i < numOfDice; i++) {
    let value = Math.floor(Math.random() * 6 + 1);
    values.push(value);
    images.push(`<img  src="./dice_images/${value}.png" alt="dice-photo"/>`);
  }

  diceResult.textContent = `dice: ${values.join(", ")}`;
  diceImages.innerHTML = images.join("");
};
