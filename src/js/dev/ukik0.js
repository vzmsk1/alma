document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.knowledge')) {
        const filters = document.querySelector('.knowledge__filters-list');

        if (window.innerWidth < 768) {
            filters.style.height = `9rem`;
            filters.dataset.showmoreContent = 9;
        }

        window.addEventListener('resize', () => {
            const value = window.innerWidth > 768 ? 6 : 9;

            filters.style.height = `${value}rem`;
            filters.dataset.showmoreContent = value;
        });
    }
});
