const gallery = document.getElementById('gallery');
const back = document.getElementById('back-to-top');
const social = document.getElementById('social-top');
const navbar = document.querySelector('.navbar');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let photos = [
  'photov.jpg',
  'photou.jpg',
  'photot.jpg',
  'family.jpeg',
  'photor.jpg',
  'photoq.jpg',
  'girl.jpeg',
  'photon.jpg',
  'photok.jpg',
  'photoj.jpg',
  'photoi.jpg',
  'photoh.jpg',
  'photog.jpg',
  'photof.jpg',
  'photod.jpg',
  '0b52274f138b7fafb327f4df0da15ae.jpg',
  '1d0cfc50c77586cc08004588b55d5f4.jpg',
  '1d3ad27c8d33f43ab0086dacb8c50bf.jpg',
  '02b0982330540b9dfddc1670c351703.jpg',
  '2bbf56f23e0532323c438818d04510b.jpg',
  '3cab0f4125c6969542ed5496eea0400.jpg',
  '3ebd3ac878844a89988c1c40bd9ce21.jpg',
  '4f3cb7f25cdc2092d6311ff32714ad1.jpg',
  '4f98634861001a5b445488d72110c09.jpg',

  '6ed62b779adac009abdc622dbf80f8b.jpg',
  '7d09c4a919830b8e357f183567f79dd.jpg',
  '8b5fdec2c0b020f05015066dd01ff3d.jpg',
  '8e5805bf5fea2e4618eec24de145eeb.jpg',
  '10e4f628891bc165c48a881f26b0589.jpg',

  '33c81f33f4ca3dfe045c8ac14578a4c.jpg',
  '45bbe91142dce2db7dcf29f0bccf27c.jpg',
  '85bc2ef40c0db8314bde51ff3818a96.jpg',
  '119ee3aa63e790b587c9bfd7ba4320d.jpg',
  '253d846d96d751f2f44af3177a99d5f.jpg',
  '781ea134252f886a62be734685b6148.jpg',
  '977d691d8935182486e641eb91146ca.jpg',
  '2160f7fc5d524bd60d3ea63b9b4b7a1.jpg',
  '3505c36e59a52e3e2027940c15c1c6f.jpg',
  '6816dd1793c3cad8a1907e910f0a688.jpg',
  '9159c378f6be90b070e37b07a7910a5.jpg',
  '16391c4b4056b2abbdb29d656f45995.jpg',
  '023361e17778fd17ee5979a27c3697d.jpg',
  '41682f9e6cdae8a8220c2b7f1d9eb08.jpg',
  '67994f8a76e222e4d4f92aabb1025ff.jpg',
  'a05dacf81117bdc719c77ec2f9ab1e9.jpg',
  'a66e788979b7a53c453bf4270170ecf.jpg',
  'a39706d3318bda133e7b673f70f28ff.jpg',
  'acbf8e28ed431ed28ef78435d388a16.jpg',
  'ae31b899f8380f23309c05e60d5898a.jpg',
  'aee28c030b0277d776e633915db86e5.jpg',
  'aff61eb86bf72b128a2da2d1b601e6c.jpg',
  'be70f760f511dfb727b94d022b8347d.jpg',
  'c3e8b2427076c53ddb9c11e902c2f81.jpg',
  'c53e1406130bb7a3f84de274ffd6fa3.jpg',
  'c335b7523129d0c478b5398423db7c9.jpg',
  'ca01b627590119a44df0645f38ab1f7.jpg',

  'd34676d2b9130f99d130773599f76fe.jpg',
  'dc24d4503c01653bd42c5fb21adf7b5.jpg',
  'ea2e248c7b9ec4aea5b1683b04a370e.jpg',
  'fbee3b36293b96c10a29e066daf5f2b.jpg',
  'fbf5aa131b12da4352e82e1f92e4696.jpg',
  'fdce2482b67777aff8932bf0995abf4.jpg',
  'texttow.jpeg',
];

fetch('http://localhost:4000/api/gallery', {
  credentials: 'include',
})
  .then(async (response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    photos = await response.json();
    console.log({ own: photos }); // Parse the response body as JSON
  })
  .then((data) => {
    console.log({ tow: data }); // Use the fetched data
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  });

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

     
        <a href="assist/images/${pht}" data-lightbox="mygallery" ><img src="assist/images/${pht}"></a>

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
