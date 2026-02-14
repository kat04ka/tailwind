const columns = document.querySelectorAll("#specs [data-column]");

columns.forEach((col) => {
  col.addEventListener("click", () => {
    columns.forEach((c) => c.setAttribute("data-active", "false"));
    col.setAttribute("data-active", "true");
  });
});

const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobilePanel = mobileMenu.querySelector("div");
const mobileLinks = document.querySelectorAll(".mobile-link");
const mobileClose = document.getElementById("mobileClose");

function openMenu() {
  burgerBtn.classList.add("is-open");
  mobileMenu.classList.remove("opacity-0", "pointer-events-none");
  mobilePanel.classList.remove("-translate-y-full");
  document.body.classList.add("overflow-hidden");
}

function closeMenu() {
  burgerBtn.classList.remove("is-open");
  mobileMenu.classList.add("opacity-0", "pointer-events-none");
  mobilePanel.classList.add("-translate-y-full");
  document.body.classList.remove("overflow-hidden");
}

burgerBtn.addEventListener("click", openMenu);
mobileClose.addEventListener("click", closeMenu);

mobileMenu.addEventListener("click", (e) => {
  if (e.target === mobileMenu) closeMenu();
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
