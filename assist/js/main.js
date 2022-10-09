const gallery = document.getElementById('gallery');
const back = document.getElementById('back-to-top');
const social = document.getElementById('social-top');
const navbar = document.querySelector('.navbar');
const photos = [
  'photov.jpg',
  'photou.jpg',
  'photot.jpg',
  'photos.jpg',
  'photor.jpg',
  'photoq.jpg',
  'photop.jpg',
  'photon.jpg',

  'photom.jpg',
  'photol.jpg',
  'photok.jpg',
  'photoj.jpg',
  'photoi.jpg',
  'photoh.jpg',
  'photog.jpg',
  'photof.jpg',

  'photod.jpg',
  'photoc.jpg',
];
function showGallery(photo) {
  gallery.innerHTML = '';
  photo.forEach((pht) => {
    const gallerys = document.createElement('div');
    gallerys.classList.add('photo');
    gallerys.innerHTML = `

     
        <a href="assist/images/${pht}" data-lightbox="mygallery" ><img src="assist/images/${pht}"></a>

      `;
    gallery.appendChild(gallerys);
  });
}
showGallery(photos);
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // for smoothly scrolling
  });
};
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    back.classList.add('scroll');
    social.classList.add('scroll');
    navbar.classList.add('bg-black');
  } else {
    back.classList.remove('scroll');
    social.classList.remove('scroll');
    navbar.classList.remove('bg-black');
  }
});
back.addEventListener('click', scrollToTop);

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY == document.body.clientHeight) {
    console.log('hi');
    social.classList.remove('scroll');
  }
});
const sections = document.querySelectorAll('section[id]');
console.log(sections);
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.navbar a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.navbar a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);
