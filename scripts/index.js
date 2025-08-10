/*----- MENU ICON NAVBAR  -----*/
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bi-x');
  navBar.classList.toggle('active');

};

/*----- SCROLL ACTIVE SECTION LINKS -----*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{

    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height){
        navLinks.forEach(links => {

          (links.classList.remove('active'));
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

        }); 

      };

    });


/*----- Sticky -----*/


    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 50);


/*----- Enlève le Navbar lorsqu'on clique les linens du menu-----*/


    menuIcon.classList.remove('bi-x');
    navBar.classList.remove('active');

}


/*----- Swiper -----*/

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


/*----- DARK/WHITE MODE -----*/

let darkmode = document.querySelector('#dark-mode');

darkmode.onclick = () =>{
  darkmode.classList.toggle('bi-sun');
  document.body.classList.toggle('darkMode');
};


/*----- SCROOL REVEAL -----*/

ScrollReveal({
  reset: true,
  distance: '80px',
  duration:2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .header, h1', {origin:'top'});
ScrollReveal().reveal('.home-img img, .about-content h5, .about-content p,.about-content a,.services-container, .portfolio-box, .temoignages-wrapper, .realisations-box, .contact form', {origin:'bottom'});
ScrollReveal().reveal('.home-content, .about-img img', {origin:'left'});
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content, .about-img ', {origin:'right'});


/*----- DOWNLOAD CV -----*/
document.getElementById('btn-cv').addEventListener('click', () =>{
  const link = document.createElement('a');
  link.href ='documents/cv_SAMIRA_BENALI.pdf';
  link.download = 'cv_SAMIRA_BENALI.pdf';

  link.click();
});






