const columns = document.querySelectorAll("#specs [data-column]");

columns.forEach((col) => {
  // Клик — работает на всех устройствах
  col.addEventListener("click", () => {
    columns.forEach((c) => c.setAttribute("data-active", "false"));
    col.setAttribute("data-active", "true");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const offcanvasEl = document.getElementById("mobileNav");
  const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);

  const mobileLinks = offcanvasEl.querySelectorAll(".js-scroll");

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      offcanvas.hide();
    });
  });
});
