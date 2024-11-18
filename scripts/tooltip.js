const popup = document.getElementById("popup");

/* tooltip for the contact section */
document.querySelectorAll(".icon-circle").forEach((icon) => {
    icon.addEventListener("mouseenter", (event) => {
        const tooltipText = icon.getAttribute("data-tooltip");
        popup.textContent = tooltipText;
        popup.style.display = "block";
    });

    icon.addEventListener("mousemove", (event) => {
        const offsetX = 15; // Distância horizontal do cursor
        const offsetY = 15; // Distância vertical do cursor

        popup.style.left = event.clientX + offsetX + "px";
        popup.style.top = event.clientY + offsetY + "px";
    });

    icon.addEventListener("mouseleave", () => {
        popup.style.display = "none";
    });
});