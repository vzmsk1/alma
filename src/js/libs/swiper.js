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
        if (!document.querySelector(swiperClass)) return;

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
    resizableSwiper('(max-width: 768px)', '.opinions__slider', {
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
    resizableSwiper('(max-width: 768px)', '.partners__slider', {
        modules: [Pagination],
        spaceBetween: remToPx(2.5),
        speed: 800,
        slidesPerView: 1,

        pagination: {
            el: '.partners__pagination .swiper-pagination',
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

    if (document.querySelector('.gallery-swiper')) {
        new Swiper('.gallery-swiper', {
            modules: [Navigation, Pagination],
            spaceBetween: remToPx(2.4),
            speed: 1200,
            grabCursor: true,
            pagination: {
                el: '.gallery .swiper-pagination',
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"></span>';
                },
                clickable: true
            },

            navigation: {
                nextEl: '.gallery .swiper-button-next',
                prevEl: '.gallery .swiper-button-prev'
            },
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 3,
                    centeredSlides: true,
                    centeredSlidesBounds: true
                }
            }
        });
    }

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

    if (document.querySelector('.sale-detail__slider')) {
        new Swiper('.sale-detail__slider', {
            modules: [Navigation, Pagination],
            spaceBetween: remToPx(2.5),
            speed: 800,
            slidesPerView: 1,

            pagination: {
                el: '.sale-detail__slider-pagination .swiper-pagination',
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"></span>';
                },
                clickable: true
            },

            navigation: {
                nextEl: '.sale-detail__slider-buttons .swiper-button-next',
                prevEl: '.sale-detail__slider-buttons .swiper-button-prev'
            }
        });
    }
});
