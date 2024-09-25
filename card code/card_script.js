function toggleAdditionalInfo() {
    var info = document.getElementById("additionalInfo");
    var button = document.querySelector(".card-button");
    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
        button.textContent = "Show Less";
    } else {
        info.style.display = "none";
        button.textContent = "Show More";
    }
}