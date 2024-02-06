import { removeClasses } from '../utils/utils';

// --------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const initHeaderMenu = () => {
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
            const activeChapter = document.querySelector('a._is-active');
            if (e.target.closest('[data-menu-chapter]')) {
                addActiveClasses(e.target.closest('[data-menu-chapter]'));
            } else if (!e.target.closest('.hamburger-menu') && activeChapter) {
                removeClasses(chapters, '_is-active');
                removeClasses(lists, '_is-active');
                activeChapter.classList.add('_is-active');
                getList(activeChapter) ? getList(activeChapter).classList.add('_is-active') : null;
            }
            if (e.target.closest('.header__hamburger-btn')) {
                document.documentElement.classList.add('_show-menu');
            } else if (!e.target.closest('.hamburger-menu') && !e.target.closest('.header__hamburger-btn')) {
                document.documentElement.classList.remove('_show-menu');
            }
        });
    };
    initHeaderMenu();
});
