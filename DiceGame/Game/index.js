function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="../dice_img/${value}.png">`);
    }

    diceResult.textContent = `You rolled: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");
    console.log(images);

    //innerHTMl takes the images and puts them in the div with the id of diceImages
}
