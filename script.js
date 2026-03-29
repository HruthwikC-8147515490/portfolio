// Popup
window.onload = () => {
    const popup = document.getElementById("popup");
    popup.style.opacity = "1";
    popup.style.transform = "translateY(0)";

    setTimeout(() => {
        popup.style.opacity = "0";
    }, 3000);
};

// Scroll animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        }
    });
});