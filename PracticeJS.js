let clickBtn = document.getElementById("ClickBtn");
let displayMessage = document.getElementById("displayMessage");
clickBtn.addEventListener("click", function() {
    displayMessage.textContent = "You clicked the button! Code wrote without seeing the reference file.";
    displayMessage.style.color = "blue";
});