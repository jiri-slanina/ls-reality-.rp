
const track = document.querySelector(".slider-track");
const dots = document.querySelectorAll(".dot");

dots.forEach(dot => {
    dot.addEventListener("click", () => {
        const index = dot.dataset.index;

        track.style.transform = `translateX(-${index * 100}%)`;

        dots.forEach(d => d.classList.remove("active"));
        dot.classList.add("active");
    });
});