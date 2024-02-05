import Swiper from 'swiper';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { remToPx } from '../utils/utils';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {
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

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
        let swiper;

        breakpoint = window.matchMedia(breakpoint);

        const enableSwiper = function (className, settings) {
            swiper = new Swiper(className, settings);

            if (callback) {
                callback(swiper);
            }
        };

        const checker = function () {
            if (breakpoint.matches) {
                return enableSwiper(swiperClass, swiperSettings);
            }

            if (swiper) swiper.destroy(true, true);
        };

        breakpoint.addEventListener('change', checker);
        checker();
    };

    new Swiper('.intro-swiper', {
        modules: [Navigation, Pagination, EffectFade],
        spaceBetween: remToPx(2),
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        grabCursor: true,

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

    swiperSettings('.specialists', {});
    swiperSettings('.services', {});
    swiperSettings('.reviews', {
        grabCursor: true
    });
    swiperSettings('.licenses', {});

    resizableSwiper('(max-width: 768px)', '.benefits-swiper', {
        modules: [Navigation, Pagination],
        spaceBetween: remToPx(3.2),
        slidesPerView: 1,
        speed: 1200,
        pagination: {
            el: '.benefits .swiper-pagination',
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
            },
            clickable: true
        }
    });
});
