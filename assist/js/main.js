const gallery = document.getElementById('gallery');
const back = document.getElementById('back-to-top');
const social = document.getElementById('social-top');
const navbar = document.querySelector('.navbar');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const loadingElement = document.getElementById('loading');
let photos = [];
const url = 'https://admin-obai-kharboutli-back-end.onrender.com/api/gallery';
getMovie(url);
async function getMovie(url) {
  loadingElement.style.display = 'flex';
  const resp = await fetch(url, {
    withCredentials: true,
  });
  photos = await resp.json();
  loadingElement.style.display = 'none';
  showGallery(photos);
}
/* 
fetch('http://localhost:4000/api/gallery', {
  credentials: 'include',
})
  .then(async (response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    photos = await response.json();
    // Parse the response body as JSON
    showGallery(photos);
  })
  .then((data) => {
    console.log({ tow: data }); // Use the fetched data
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  }); */

let start = 0;
let end = 9;
function slicing(start, end) {
  let page = photos.slice(start, end);
  return page;
}
function showGallery(photo) {
  gallery.innerHTML = '';
  photo.forEach((pht) => {
    const gallerys = document.createElement('div');
    gallerys.classList.add('photo');
    gallerys.innerHTML = `

     
        <a href="${pht.file}" data-lightbox="mygallery" ><img src="${pht.file}"></a>

      `;
    gallery.appendChild(gallerys);
  });
}
showGallery(slicing(start, end));
next.addEventListener('click', () => {
  if (end < photos.length) {
    start = start + 9;
    end = end + 9;
  }
  showGallery(slicing(start, end));
});
prev.addEventListener('click', () => {
  if (start > 0) {
    start = start - 9;
    end = end - 9;
  }
  showGallery(slicing(start, end));
});
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
window.addEventListener('scroll', () => {
  scrollActive;

  if (window.innerHeight + window.scrollY >= document.body.clientHeight - 0.5) {
    console.log('hi');
    social.classList.remove('scroll');
  }
});
function sendemail() {
  console.log(document.getElementById('from').value);
  var temParams = {
    from_name: document.getElementById('toName').value,
    email_id: document.getElementById('from').value,
    message: document.getElementById('msg').value,
  };

  emailjs.send('service_7pmzvle', 'template_fkmpv59', temParams).then((res) => {
    console.log('success', res.status);
  });

  var form = document.querySelector('.footer-contant');
  form.innerHTML =
    '<h2> Thank you we received your email and we will get back to you soon </h2>';
}
const load = document.getElementById('preload');
window.addEventListener('load', () => {
  load.style.display = 'none';
});
