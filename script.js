// Tunggu sampai seluruh dokumen HTML selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
  // Ambil elemen DOM yang dibutuhkan
  const hamburger = document.getElementById("hamburger");
  const sideMenu = document.getElementById("sideMenu");
  const closeBtn = document.getElementById("closeBtn");
  const overlayBlur = document.getElementById("overlayBlur");
  const mainContent = document.getElementById("mainContent");

  // Ketika hamburger diklik, tampilkan menu dan blur konten
  hamburger.addEventListener("click", () => {
    sideMenu.classList.add("show");         // buka menu
    overlayBlur.style.display = "block";    // tampilkan overlay
    mainContent.classList.add("blur");      // blur konten utama
  });

  // Saat tombol close diklik, tutup menu dan hilangkan blur
  closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("show");
    overlayBlur.style.display = "none";
    mainContent.classList.remove("blur");
  });


  
  // Klik di area overlay juga akan menutup menu
  overlayBlur.addEventListener("click", () => {
    sideMenu.classList.remove("show");
    overlayBlur.style.display = "none";
    mainContent.classList.remove("blur");
  });
});

