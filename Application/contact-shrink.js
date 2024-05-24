function toggleSection(button) {
    var content = button.nextElementSibling;  // Use nextElementSibling to get the .shrink-content div
    var lowerArrow = button.querySelector('.lower-arrow');
    var minusSign = button.querySelector('.minus-sign');

    if (content.style.display === "block") {
        content.style.display = "none";
        lowerArrow.style.display = "block";
        minusSign.style.display = "none";
        content.style.background = "white"; 
        button.style.background = "white";
    } else {
        content.style.display = "block";
        lowerArrow.style.display = "none";
        minusSign.style.display = "block";
        content.style.background = "#fcf4f4";
        button.style.background = "#fcf4f4";
    }
}
