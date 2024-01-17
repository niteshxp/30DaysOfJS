let slideIndex = -1; // Start at the first slide

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment index and show next slide
    slideIndex++;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slides[slideIndex].style.display = "block";

}

// Show the first slide on page load
showSlides();

// Button functionality to move between slides
document.getElementById("prevBtn").addEventListener("click", function () {
    slideIndex -= 2; // Go back two slides to account for the automatic increment in showSlides()
    showSlides();
});

document.getElementById("nextBtn").addEventListener("click", function () {
    showSlides();
});

// Automatic slideshow every few seconds (e.g., every 3 seconds)
setInterval(showSlides, 3000);
