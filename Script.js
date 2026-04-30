
// FORM SUBMIT
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
});

// SCROLL ANIMATION
window.addEventListener("scroll", function() {
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let position = card.getBoundingClientRect().top;
        let screen = window.innerHeight;

        if(position < screen - 50) {
            card.style.transform = "scale(1.1)";
        }
    });
});// FADE-IN EFFECT
window.addEventListener("scroll", function() {
    let elements = document.querySelectorAll("section");

    elements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let screen = window.innerHeight;

        if(position < screen - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});
