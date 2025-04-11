const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');
const closeBtn = document.getElementById('closeBtn');
const mainContent = document.getElementById('mainContent');
const overlayBlur = document.getElementById('overlayBlur');

hamburger.addEventListener('click', () => {
  sideMenu.classList.add('show');
  overlayBlur.style.display = 'block';
  hamburger.style.opacity = '0';
});

closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('show');
  mainContent.classList.remove('blur');
  overlayBlur.style.display = 'none';
  setTimeout(() => {
    hamburger.style.opacity = '1';
  }, 300);
});

hamburger.addEventListener('click', () => {
  sideMenu.classList.add('show');
  overlayBlur.style.display = 'block';
  hamburger.style.opacity = '0';
  mainContent.classList.add('blur'); // Tambahan efek blur
});
