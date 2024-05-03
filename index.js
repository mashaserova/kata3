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
document.addEventListener("DOMContentLoaded", function() {
    const repair = document.querySelector('.repair')
    const btn = document.querySelector('button');
    const blueArrows = document.querySelector('.show-all-btn')
    const els = document.querySelectorAll('.swiper-slide');
    const elFirst = Array.from(els).slice(6, 11);
    const elSecond = Array.from(els).slice(8, 11);
    const elThird = Array.from(els).slice(6, 8);
    if (window.matchMedia("(min-width: 1126px)").matches) {
        elThird.forEach(el => {
            el.classList.remove('swiper-slide_none');
        })
    }
    btn.addEventListener('click', () => {
        if (window.matchMedia("(min-width: 768px) and (max-width: 1125px)").matches) {
            btn.textContent = "Показать все";
            elFirst.forEach( el => {
                if (el.classList.contains('swiper-slide_none')) {
                    btn.textContent = "Скрыть";
                    el.classList.remove('swiper-slide_none');
                    repair.classList.remove('repair');
                    repair.classList.add('repair_bigger');
                    blueArrows.classList.add('show-less-btn');
                    blueArrows.classList.remove('show-all-btn');
                } else {
                    el.classList.add('swiper-slide_none');
                    repair.classList.add('repair');
                    repair.classList.remove('repair_bigger');
                    blueArrows.classList.remove('show-less-btn');
                    blueArrows.classList.add('show-all-btn');
                } 
            });
        } else if (window.matchMedia("(min-width: 1126px)").matches) {
            btn.textContent = "Показать все";
            elSecond.forEach( el => {
                if (el.classList.contains('swiper-slide_none')) {
                    btn.textContent = "Скрыть";
                    el.classList.remove('swiper-slide_none');
                    repair.classList.remove('repair');
                    repair.classList.add('repair_bigger');
                    blueArrows.classList.add('show-less-btn');
                    blueArrows.classList.remove('show-all-btn');
                } else {
                    el.classList.add('swiper-slide_none');
                    repair.classList.add('repair');
                    repair.classList.remove('repair_bigger');
                    blueArrows.classList.remove('show-less-btn');
                    blueArrows.classList.add('show-all-btn');
                } 
            });
        }
    });
});
