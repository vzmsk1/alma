document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.knowledge')) {
        const filters = document.querySelector('.knowledge__filters-list');

        if (window.innerWidth < 768) {
            filters.style.height = `9rem`;
            filters.dataset.showmoreContent = 9;
        }

        window.addEventListener('resize', () => {
            const wrapper = document.querySelector('.knowledge__filters');

            const isOpened = wrapper.classList.contains('_showmore-active');
            const value = window.innerWidth > 768 ? 6 : 9;

            filters.style.height = `${value}rem`;
            filters.dataset.showmoreContent = value;

            if (window.innerWidth < 768 && isOpened) {
                wrapper.classList.remove('_showmore-active');
            }
        });
    }

    if (document.querySelector('.services-page-template-3')) {
        const wrapper = document.querySelector('.sidebar-ar__wrapper');

        if (window.innerWidth < 768) {
            setTimeout(() => {
                wrapper.style.height = `80rem`;
                wrapper.dataset.showmoreContent = 80;
            }, 1);
        }

        window.addEventListener('resize', () => {
            const value = window.innerWidth > 768 ? 1000000 : 80;

            wrapper.style.height = window.innerWidth > 768 ? '100%' : `${value}rem`;
            wrapper.dataset.showmoreContent = value;
        });
    }
});
