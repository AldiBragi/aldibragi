document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const sideMenu = document.getElementById("sideMenu");
  const closeBtn = document.getElementById("closeBtn");
  const overlayBlur = document.getElementById("overlayBlur");
  const mainContent = document.getElementById("mainContent");

  hamburger.addEventListener("click", () => {
    sideMenu.classList.add("show");
    overlayBlur.style.display = "block";
    mainContent.classList.add("blur");
    document.body.classList.add("no-scroll"); // 🔒 Disable scroll
  });

  closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("show");
    overlayBlur.style.display = "none";
    mainContent.classList.remove("blur");
    document.body.classList.remove("no-scroll"); // 🔓 Enable scroll
  });

  // Biar overlay bisa juga menutup menu kalau diklik
  overlayBlur.addEventListener("click", () => {
    sideMenu.classList.remove("show");
    overlayBlur.style.display = "none";
    mainContent.classList.remove("blur");
    document.body.classList.remove("no-scroll");
  });
});
