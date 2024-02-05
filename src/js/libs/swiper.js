import Swiper from 'swiper';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { remToPx } from '../utils/utils';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {
    let opinionsSlider = null;

    const swiperSettings = (initializer, payload) => {
        if (!document.querySelector(initializer)) return;

        new Swiper(`${initializer}-swiper`, {
            modules: [Navigation, Pagination],
            spaceBetween: remToPx(2.4),
            speed: 1200,
            pagination: {
                el: `${initializer} .swiper-pagination`,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"></span>';
                },
                clickable: true
            },
            navigation: {
                nextEl: `${initializer} .swiper-button-next`,
                prevEl: `${initializer} .swiper-button-prev`
            },

            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 3
                }
            },
            ...payload
        });
    };
    const initSliders = () => {
        if (document.querySelector('.intro-swiper')) {
            new Swiper('.intro-swiper', {
                modules: [Navigation, Pagination, EffectFade],
                spaceBetween: remToPx(2),
                slidesPerView: 1,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },

                pagination: {
                    el: '.intro__slider-navigation .swiper-pagination',
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '"></span>';
                    },
                    clickable: true
                },

                navigation: {
                    nextEl: '.intro__slider-navigation .swiper-button-next',
                    prevEl: '.intro__slider-navigation .swiper-button-prev'
                },

                on: {
                    slideChange: ({ realIndex }) => {
                        document.querySelector('.intro__slider-navigation-fraction p span').textContent =
                            realIndex + 1;
                    }
                }
            });
        }

        if (document.querySelector('.areas__slider')) {
            new Swiper('.areas__slider', {
                modules: [Navigation, Pagination],
                spaceBetween: remToPx(2.5),
                speed: 800,
                slidesPerView: 1,

                pagination: {
                    el: '.areas__pagination .swiper-pagination',
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '"></span>';
                    },
                    clickable: true
                },

                navigation: {
                    nextEl: '.areas .swiper-button-next',
                    prevEl: '.areas .swiper-button-prev'
                },

                breakpoints: {
                    768: {
                        slidesPerView: 3
                    }
                }
            });
        }

        if (document.querySelector('.opinions__slider')) {
            if (window.innerWidth <= 768 && !opinionsSlider) {
                opinionsSlider = new Swiper('.opinions__slider', {
                    modules: [Pagination],
                    spaceBetween: remToPx(2.5),
                    speed: 800,
                    slidesPerView: 1,

                    pagination: {
                        el: '.opinions__pagination .swiper-pagination',
                        renderBullet: function (index, className) {
                            return '<span class="' + className + '"></span>';
                        },
                        clickable: true
                    },

                    breakpoints: {
                        768: {
                            enabled: false
                        }
                    }
                });
            } else if (window.innerWidth > 768 && opinionsSlider) {
                opinionsSlider.destroy();
                opinionsSlider = null;
            }
        }
    };

    swiperSettings('.specialists', {});
    swiperSettings('.services', {});

    initSliders();
    window.addEventListener('resize', initSliders);
});
