const header = document.querySelector("[data-elevate]");

function syncHeader() {
  header.classList.toggle("is-elevated", window.scrollY > 24);
}

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();
