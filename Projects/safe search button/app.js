var blurBtn = document.getElementById("blurBtn")
var offBtn = document.getElementById("offBtn")
var images = document.querySelectorAll(".img")

blurBtn.onclick = function(){
    for(let i = 0; i < images.length; i++)
        images[i].classList.add("blurEffect")
}
offBtn.onclick = function(){
    for(let i = 0; i < images.length; i++)
        images[i].classList.remove("blurEffect")
}
