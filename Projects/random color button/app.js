var colorChangerBtn = document.getElementById("color-changer-btn")

function randomNumber(){
    return Math.floor(Math.random() * 256)
}

function randomColor(){
    return`rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
}

function changeColor(){
    document.body.style.backgroundColor = randomColor()
}