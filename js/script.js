const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');
/* menu show */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}
/* menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}

/* remove mobile class */
const navLink = document.querySelectorAll('.nav__link');

const linkAct = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAct));

/* change bg */
const shadowHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
}
window.addEventListener('scroll', shadowHeader);

function rangeSlider(value) {
	document.getElementsByClassName("before-image")[0].style.width = +value + "%";
}

/* scroll reveal */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 300,
    // reset: true,
});

sr.reveal(`.home__img`, {delay: 200, distance: '100px', origin: 'right'});
sr.reveal(`.home__bg`, {delay: 200, distance: '100px', origin: 'bottom'});
sr.reveal(`.home__title`, {delay: 300, distance: '100px', origin: 'left'});
sr.reveal(`.home__description`, {delay: 500, distance: '100px', origin: 'left'});
sr.reveal(`.home__data-btn`, {delay: 700, distance: '100px', origin: 'left'});


sr.reveal(`.category`, {delay: 300,  distance: '100px', interval: 200, origin: 'right'});
sr.reveal(`.category-title img`, {delay: 400,  distance: '100px', origin: 'right'});
sr.reveal(`.category-title h2`, {delay: 500,  distance: '100px', origin: 'right'});
sr.reveal(`.category p`, {delay: 600,  distance: '100px', origin: 'right'});
sr.reveal(`.category__link`, {delay: 700, origin: 'bottom'});
sr.reveal(`.category__link i`, {delay: 800, origin: 'bottom'});

sr.reveal(`.guide .section-title`, {delay: 200, origin: 'right'});
sr.reveal(`.guide__block`, {delay: 400, interval: 200, origin: 'bottom'});

sr.reveal(`.map_map-pc`, {delay: 100, distance: '50px', origin: 'bottom'});
sr.reveal(`.map__description`, {delay: 400, distance: '100px', origin: 'right'});

sr.reveal(`.catalog__prods .section-title`, {delay: 200, distance: '100px', origin: 'right'});
sr.reveal(`.product__block`, {delay: 200, distance: '100px', origin: 'bottom', interval: 200});

sr.reveal(`.example-left .example-left-title`, {delay: 100, distance: '50px', origin: 'left'});
sr.reveal(`.example-left .example-left-text`, {delay: 200, distance: '50px', origin: 'right'});
sr.reveal(`.example-module`, {delay: 300, distance: '50px', origin: 'bottom', interval: 200});
sr.reveal(`.example-price`, {delay: 400, distance: '50px', origin: 'bottom'});

sr.reveal(`.program .section-title`, {delay: 100, distance: '50px', origin: 'right'});
sr.reveal(`.program .section-subtitle`, {delay: 300, distance: '50px', origin: 'right'});
sr.reveal(`.form-group-left`, {delay: 300, distance: '50px', origin: 'left'});
sr.reveal(`.form-group-right`, {delay: 300, distance: '50px', origin: 'right'});
sr.reveal(`.owner .form-group_services-title`, {delay: 400, distance: '50px', origin: 'left'});
sr.reveal(`.owner-block .form-input`, {delay: 500, distance: '50px', origin: 'left', interval: 100});
sr.reveal(`.comments .form-group_services-title`, {delay: 200, distance: '50px', origin: 'left'});
sr.reveal(`.comments #comment`, {delay: 300, distance: '50px', origin: 'right'});
sr.reveal(`.form-group_services .form-group_services-title`, {delay: 400, distance: '50px', origin: 'left'});
sr.reveal(`.form-group_services .form-group`, {delay: 500, distance: '50px', origin: 'bottom', interval: 200});
sr.reveal(`.form-submit button`, {delay: 600, distance: '50px', origin: 'left'});
sr.reveal(`.form-submit p`, {delay: 600, distance: '50px', origin: 'right'});

sr.reveal(`.images-container`, {delay: 200, distance: '50px', origin: 'top'});
sr.reveal(`.slider-range-block`, {delay: 400, distance: '50px', origin: 'bottom'});

sr.reveal(`.additional__goods .section-title`, {delay: 200, distance: '100px', origin: 'right'});
sr.reveal(`.additional__goods-services-block`, {delay: 200, distance: '100px', origin: 'left', interval: 200});
sr.reveal(`.additional__gods-prize`, {delay: 400, distance: '100px', origin: 'right'});

sr.reveal(`.footer__logo`, {delay: 200, distance: '100px', origin: 'left'});
sr.reveal(`.footer__link ul li`, {delay: 200, distance: '100px',interval: 200, origin: 'bottom'});
sr.reveal(`.footer__logo-2`, {delay: 200, distance: '100px', origin: 'right'});

