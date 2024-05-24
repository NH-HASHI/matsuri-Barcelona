function toggleSection(button) {
    var content = button.closest('.view-box-description-always').nextElementSibling;
    var lowerArrow = button.querySelector('.lower-arrow');
    var upperArrow = button.querySelector('.upper-arrow');
    var activityBox = button.closest('.activity-view-box');

    if (content.style.display === "block") {
        content.style.display = "none";
        lowerArrow.style.display = "block";
        upperArrow.style.display = "none";
        activityBox.style.background = "white"
    } else {
        content.style.display = "block";
        lowerArrow.style.display = "none";
        upperArrow.style.display = "block";
        activityBox.style.background = "#fcf4f4"
    }
}
