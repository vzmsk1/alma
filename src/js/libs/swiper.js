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
        speed: 1200,
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
    resizableSwiper(
        '(max-width: 768px)',
        '.conditions-tabs-swiper',
        {
            modules: [Pagination],
            spaceBetween: remToPx(1.6),
            speed: 1200,
            slidesPerView: 'auto',
            slideToClickedSlide: true,
            resizeObserver: true,
            observer: true
        },
        (swiper) => setTimeout(() => swiper.update(), 100)
    );
    resizableSwiper('(max-width: 768px)', '.steps-swiper', {
        modules: [Pagination],
        spaceBetween: remToPx(2),
        speed: 1200,
        slidesPerView: 1,
        pagination: {
            el: '.steps .swiper-pagination',
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
            },
            clickable: true
        }
    });
    resizableSwiper('(max-width: 768px)', '.discounts__slider', {
        modules: [Pagination],
        spaceBetween: remToPx(2.5),
        speed: 800,
        slidesPerView: 1,

        pagination: {
            el: '.discounts__pagination .swiper-pagination',
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
    resizableSwiper('(max-width: 768px)', '.actions__slider', {
        modules: [Pagination],
        spaceBetween: remToPx(2.5),
        speed: 800,
        slidesPerView: 1,
        autoHeight: true,

        pagination: {
            el: '.actions__pagination .swiper-pagination',
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
    }

    if (document.querySelectorAll('.slider-section__slider').length) {
        document.querySelectorAll('.slider-section__slider').forEach((section) => {
            const parent = section.closest('.slider-section__container');

            new Swiper(section, {
                modules: [Navigation, Pagination],
                spaceBetween: remToPx(2.5),
                speed: 1200,
                slidesPerView: 1,

                pagination: {
                    el: parent.querySelector('.swiper-pagination'),
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '"></span>';
                    },
                    clickable: true
                },

                navigation: {
                    nextEl: parent.querySelector('.swiper-button-next'),
                    prevEl: parent.querySelector('.swiper-button-prev')
                },

                breakpoints: {
                    768: {
                        slidesPerView: 3
                    }
                }
            });
        });
    }

    if (document.querySelectorAll('.group-directions__slider').length) {
        document.querySelectorAll('.group-directions__slider').forEach((section) => {
            new Swiper(section, {
                modules: [Navigation],
                spaceBetween: remToPx(1.6),
                speed: 800,
                slidesPerView: 'auto',

                navigation: {
                    nextEl: section.closest('.group-directions').querySelector('.swiper-button-next'),
                    prevEl: section.closest('.group-directions').querySelector('.swiper-button-prev')
                }
            });
        });
    }

    if (document.querySelector('.conditions')) {
        Array.from(document.querySelectorAll('.conditions-gallery-swiper'), (swiper) => {
            const buttons = swiper.parentElement.querySelector('.conditions__navigation-buttons');

            const conditionsSwiper = new Swiper(swiper, {
                modules: [Navigation, Pagination],
                spaceBetween: remToPx(2),
                slidesPerView: 1,
                speed: 1200,
                grabCursor: true,
                navigation: {
                    nextEl: buttons.querySelector('.swiper-button-next'),
                    prevEl: buttons.querySelector('.swiper-button-prev')
                }
            });
        });
    }

    if (document.querySelector('.certificate-modal')) {
        const certificateSwiper = new Swiper('.certificate-swiper', {
            modules: [Navigation, Pagination],
            spaceBetween: remToPx(2),
            slidesPerView: 1,
            speed: 1200,
            grabCursor: true,
            navigation: {
                nextEl: '.certificate-modal .swiper-button-next',
                prevEl: '.certificate-modal .swiper-button-prev'
            },
            pagination: {
                el: '.certificate-modal .swiper-pagination',
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"></span>';
                },
                clickable: true
            }
        });

        Array.from(document.querySelectorAll('.licenses__card')).forEach((card, index) => {
            card.addEventListener('click', () => {
                certificateSwiper.slideTo(index, 0);
            });
        });
    }

    if (document.querySelector('.sale-detail__slider')) {
        new Swiper('.sale-detail__slider', {
            modules: [Navigation, Pagination],
            spaceBetween: remToPx(2.5),
            speed: 1200,
            grabCursor: true,
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

    if (document.querySelector('.review-license')) {
        new Swiper('.review-license', {
            modules: [Navigation, Pagination],
            spaceBetween: remToPx(2.5),
            speed: 800,
            slidesPerView: 1,

            pagination: {
                el: '.review-license__pagination .swiper-pagination',
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"></span>';
                },
                clickable: true
            },

            navigation: {
                nextEl: '.review-license__buttons .swiper-button-next',
                prevEl: '.review-license__buttons .swiper-button-prev'
            }
        });
    }

    if (document.querySelector('.article-licenses-swiper')) {
        new Swiper('.article-licenses-swiper', {
            modules: [Pagination, Navigation],
            spaceBetween: remToPx(2),
            speed: 1200,
            slidesPerView: 1,
            pagination: {
                el: '.article__licenses .swiper-pagination',
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"></span>';
                },
                clickable: true
            },
            navigation: {
                nextEl: '.article__licenses .navigation-buttons .swiper-button-next',
                prevEl: '.article__licenses .navigation-buttons .swiper-button-prev'
            }
        });
    }
});
