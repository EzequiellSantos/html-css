var animateButton = function (e) {
    e.preventDefault;
    e.target.classList.remove("animate");
    e.target.classList.add("animate");
    setTimeout(function ()  {
    e.target.classList.remove("animate");
    }, 700);    
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for ( var i = 0; 1 < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener("click", animateButton, false)
}