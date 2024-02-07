import { removeClasses, bodyLockStatus, bodyLock, bodyUnlock } from '../utils/utils';

// --------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const initHeaderMenu = () => {
        if (document.querySelector('header')) {
            const chapters = document.querySelectorAll('[data-menu-chapter]');
            const lists = document.querySelectorAll('[data-menu-list]');

            const getList = (chapter) => {
                return document.querySelector(`[data-menu-list="${chapter.dataset.menuChapter}"]`);
            };
            const addActiveClasses = (chapter) => {
                removeClasses(chapters, '_is-active');
                removeClasses(lists, '_is-active');
                chapter.classList.add('_is-active');
                getList(chapter) ? getList(chapter).classList.add('_is-active') : null;
            };

            document.addEventListener('mouseover', function (e) {
                if (window.innerWidth > 768) {
                    const activeChapter = document.querySelector('a._is-active');
                    if (e.target.closest('[data-menu-chapter]')) {
                        addActiveClasses(e.target.closest('[data-menu-chapter]'));
                    } else if (!e.target.closest('.desktop-menu') && activeChapter) {
                        removeClasses(chapters, '_is-active');
                        removeClasses(lists, '_is-active');
                        activeChapter.classList.add('_is-active');
                        getList(activeChapter) ? getList(activeChapter).classList.add('_is-active') : null;
                    }
                    if (e.target.closest('.header__hamburger-btn')) {
                        document.documentElement.classList.add('_show-menu');
                    } else if (
                        !e.target.closest('.desktop-menu') &&
                        !e.target.closest('.header__hamburger-btn')
                    ) {
                        document.documentElement.classList.remove('_show-menu');
                    }
                }
            });

            document.querySelector('header').addEventListener('click', function (e) {
                const target = e.target;

                if (target.closest('.hamburger') && bodyLockStatus) {
                    document.documentElement.classList.add('_show-mobile-menu');
                    bodyLock();
                }
                if (target.closest('.mobile-menu__close-btn') && bodyLockStatus) {
                    document.documentElement.classList.remove('_show-mobile-menu');
                    bodyUnlock();
                }
                if (target.closest('.list-mobile-menu__item_services')) {
                    document.querySelector('.header__submenu').classList.add('_is-active');
                }
                if (target.closest('.submenu-mobile-menu__close-btn')) {
                    document.querySelector('.header__submenu').classList.remove('_is-active');
                }
            });

            window.addEventListener('resize', function () {
                if (window.innerWidth > 768 && bodyLockStatus) {
                    document.documentElement.classList.remove('_show-mobile-menu');
                    document.querySelector('.header__submenu').classList.remove('_is-active');
                    bodyUnlock();
                }
            });
        }
    };
    initHeaderMenu();
});
