import videojs from 'video.js';

// --------------------------------------------------------------------------

const initVideoJS = () => {
    if (document.querySelectorAll('[data-video]').length) {
        const videos = document.querySelectorAll('[data-video]');
        videos.forEach((video) => {
            const data = video.dataset.video;
            const parent = video.closest('[data-video-wrap]');
            const vjs = videojs(video, {
                controls: true,
                poster: data.length ? data : null
            });

            let isPlaying = true;

            async function playVid() {
                console.log(vjs.paused(), !isPlaying);
                if (vjs.paused()) {
                    console.log('play');
                    return vjs.play();
                }
            }

            async function pauseVid() {
                console.log('call-pa');
                if (!vjs.paused()) {
                    console.log('pause');
                    vjs.pause();
                }
            }

            vjs.on('play', function () {
                if (parent) {
                    parent.classList.add('_init');
                }
            });
        });
    }
};
initVideoJS();
