const defaultRatingIndex = 0;
let currentRatingIndex = 0;

const setRating = (index, stars) => {
    stars.forEach((star) => {
        star.classList.remove('_is-active');
        if (star.closest('._form-error')) star.closest('._form-error').classList.remove('_form-error');
    });
    if (index > 0 && index <= stars.length) {
        document.querySelector('[data-rate="' + index + '"]').classList.add('_is-active');
    }
};

export const resetRating = (stars) => {
    currentRatingIndex = defaultRatingIndex;
    setRating(defaultRatingIndex, stars);
};

const initStarRating = () => {
    const starRatings = document.querySelectorAll('[data-star-rating]');

    if (starRatings.length) {
        starRatings.forEach((rating) => {
            const stars = rating.querySelectorAll('.star-rating__star');

            const checkSelectedStar = (star) => {
                if (parseInt(star.getAttribute('data-rate')) === currentRatingIndex) {
                    return true;
                } else {
                    return false;
                }
            };

            stars.forEach((star) => {
                star.addEventListener('click', function () {
                    if (checkSelectedStar(star)) {
                        resetRating(stars);
                        return;
                    }
                    const index = parseInt(star.getAttribute('data-rate'));
                    currentRatingIndex = index;
                    setRating(index, stars);
                });

                star.addEventListener('mouseover', function () {
                    const index = parseInt(star.getAttribute('data-rate'));
                    setRating(index, stars);
                });

                star.addEventListener('mouseout', function () {
                    setRating(currentRatingIndex, stars);
                });
            });

            document.addEventListener('DOMContentLoaded', function () {
                setRating(defaultRatingIndex, stars);
            });
        });
    }
};
initStarRating();
