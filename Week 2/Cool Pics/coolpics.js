const menuButton = document.querySelector('.menu-button');
const navItems = document.querySelector('.nav-items');

menuButton.addEventListener('click', () => {
    navItems.classList.toggle('hide');
});


function handleResize() {
    const menu = document.querySelector(".nav-items");
    if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
}
  
handleResize();
window.addEventListener("resize", handleResize);



const viewer = document.querySelector('.viewer');
const closeViewer = document.querySelector('.close-viewer');
const galleryImages = document.querySelectorAll('.gallery img');


function openModal(src, alt) {
  viewer.querySelector('img').src = src;
  viewer.querySelector('img').alt = alt;
  viewer.classList.remove('hide');
}


function closeModal() {
  viewer.classList.add('hide');
}


galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    const largeSrc = img.getAttribute('data-large');
    openModal(largeSrc, img.alt);
  });
});


closeViewer.addEventListener('click', closeModal);
