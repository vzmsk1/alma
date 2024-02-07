document.addEventListener('DOMContentLoaded', () => {
   if (document.querySelector('.knowledge')) {
       const filters = document.querySelector('.knowledge__filters-list');

       window.addEventListener('resize', () => {
           const value = window.innerWidth > 768 ? 6 : 10;

           filters.style.height = `${value}rem`;
           filters.dataset.showmoreContent = value;
       });
   }
});
