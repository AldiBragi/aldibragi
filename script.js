const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');
const closeBtn = document.getElementById('closeBtn');
const mainContent = document.getElementById('mainContent');

hamburger.addEventListener('click', () => {
  sideMenu.classList.add('show');
  mainContent.classList.add('blur');
  hamburger.style.opacity = '0';
});

closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('show');
  mainContent.classList.remove('blur');
  setTimeout(() => {
    hamburger.style.opacity = '1';
  }, 300); // sesuai waktu transisi menu keluar
});

const overlayBlur = document.getElementById('overlayBlur');

hamburger.addEventListener('click', () => {
  sideMenu.classList.add('show');
  overlayBlur.style.display = 'block';
  hamburger.style.opacity = '0';
});

closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('show');
  overlayBlur.style.display = 'none';
  setTimeout(() => {
    hamburger.style.opacity = '1';
  }, 300);
});
