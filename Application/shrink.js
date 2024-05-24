function toggleSection(button) {
    var content = button.parentNode.querySelector('.shrink-content')
    var plusSign = button.querySelector('.plus-sign');
    var minusSign = button.querySelector('.minus-sign');

    if (content.style.display === "block") {
        content.style.display = "none";
        plusSign.style.display = "block";
        minusSign.style.display = "none";
        content.style.background = "white"; 
        button.style.background = "white";
    } else {
        content.style.display = "block";
        plusSign.style.display = "none";
        minusSign.style.display = "block";
        content.style.background = "#fcf4f4";
        button.style.background = "#fcf4f4";
    }
}