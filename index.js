let swiper;
function initSwiper() {
    swiper = new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            clickable: true,
            el: ".swiper-pagination",
        },
    });
}
function destroySwiper() {
    if (swiper !== undefined) {
        swiper.destroy();
        swiper = undefined;
    }
}
function handleResize () {
    if (window.matchMedia("(min-width: 768px)").matches) {
        destroySwiper();
    } else {
        initSwiper();
    }
}
initSwiper();
handleResize();
window.addEventListener('resize', handleResize);

let repair = document.querySelector('.repair')
let btn = document.querySelector('button');
let els = document.querySelectorAll('.swiper-slide');
let el = Array.from(els).slice(6, 11);
if (window.matchMedia("(max-width: 1115px)").matches) {
        btn.addEventListener('click', () => {
        el.forEach( el => {
            if (el.style.display === 'block') {
                el.style.display = 'none';
                btn.textContent = "Показать все"
                repair.style.height = '240px'
            } else {
                el.style.display = 'block';
                btn.textContent = "Скрыть"
                repair.style.height = '340px'
            } 
        });
    });
}
el = Array.from(els).slice(9, 11);
if (window.matchMedia("(min-width: 1115px)").matches) {
        btn.addEventListener('click', () => {
        el.forEach( el => {
            if (el.style.display === 'block') {
                el.style.display = 'none';
                btn.textContent = "Показать все"
                repair.style.height = '240px'
            } else {
                el.style.display = 'block';
                btn.textContent = "Скрыть"
                repair.style.height = '340px'
            } 
        });
    });
}