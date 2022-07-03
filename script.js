function rollDices(){
    let numberOfDices = document.getElementById("inputNumberOfDices").value;
    let text = document.getElementById("Text");
    if( numberOfDices > 4 || isNaN(parseInt(numberOfDices))){//if value is greater then 4 or it is not a number
        text.style = "color: red;";
        text.innerText = "Invalid value!";//we tell the user about it and do nothing
    }
    else{
        text.style = "color: black;";
        text.textContent = " ";
        let i = 1;
        for(i = 1; i <= numberOfDices; i++){
            curentImg = document.getElementById(i + "Cube");//get <img> by id
            numberOnDice = Math.floor(Math.random() * (7 - 1) + 1 );//generate a random num
            curentImg.src = numberOnDice + ".png";//change our <img> 
            console.log(numberOnDice);
        }
        for(let x = i; x <= 4; x++){
            console.log(i);
            curentImg = document.getElementById(x + "Cube");
            curentImg.src = "";
        }
    }
    
}