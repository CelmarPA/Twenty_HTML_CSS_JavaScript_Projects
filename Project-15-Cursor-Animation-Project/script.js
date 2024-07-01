// Obtém o elemento cursor and nav-links
const customCursor = document.querySelector(".cursor");
const navLinks = document.querySelectorAll(".nav-links li");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
    updateCursorPosicao(e);
}

function updateCursorPosicao(e) {
    customCursor.style.top = e.pageY + "px";
    customCursor.style.left = e.pageX + "px";
}

navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        animarCursor();
        highlightLink(link);
    });

    link.addEventListener("mouseleave", () => {
        removerAminacaoCursor();
        unhighlightLink(link);
    });
});

function animarCursor() {
    customCursor.classList.add("link-animate");
}

function removerAminacaoCursor() {
    customCursor.classList.remove("link-animate");
}

function highlightLink(link) {
    link.classList.add("link-hovering");
}

function unhighlightLink(link) {
    link.classList.remove("link-hovering");
}
