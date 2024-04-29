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

const repair = document.querySelector('.repair')
const btn = document.querySelector('button');
const blueArrows = document.querySelector('.show-all-btn')
const els = document.querySelectorAll('.swiper-slide');
const el1 = Array.from(els).slice(6, 11);
const el2 = Array.from(els).slice(8, 11);
btn.addEventListener('click', () => {
    if (window.matchMedia("(min-width: 768px) and (max-width: 1125px)").matches) {
        el1.forEach( el => {
            if (el.style.display === 'block') {
                el.style.display = 'none';
                btn.textContent = "Показать все";
                repair.style.height = '240px';
                blueArrows.style.background = "url('../images/blue-arrows_down.svg') 9px 6px no-repeat";
            } else {
                el.style.display = 'block';
                btn.textContent = "Скрыть";
                repair.style.height = '440px';
                blueArrows.style.background = "url('../images/blue-arrows_up.svg') 9px 6px no-repeat";
            } 
        });
    } else if (window.matchMedia("(min-width: 1126px)").matches) {
        el2.forEach( el => {
            if (el.style.display === 'block') {
                el.style.display = 'none';
                btn.textContent = "Показать все";
                repair.style.height = '240px';
                blueArrows.style.background = "url('../images/blue-arrows_down.svg') 9px 6px no-repeat";
            } else {
                el.style.display = 'block';
                btn.textContent = "Скрыть";
                repair.style.height = '340px';
                blueArrows.style.background = "url('../images/blue-arrows_up.svg') 9px 6px no-repeat";
            } 
        });
    }
});
