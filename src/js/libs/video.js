import videojs from 'video.js';
import { modules } from '../modules.js';

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

            vjs.onplaying = function () {
                isPlaying = true;
            };

            vjs.onpause = function () {
                isPlaying = false;
            };

            async function playVid() {
                if (vjs.paused && !isPlaying) {
                    return vjs.play();
                }
            }

            function pauseVid() {
                if (!vjs.paused && isPlaying) {
                    vjs.pause();
                }
            }

            vjs.on('play', function () {
                if (parent) {
                    parent.classList.add('_init');
                }
            });

            if (parent) {
                parent.addEventListener('click', function (e) {
                    if (!parent.closest('.modal')) {
                        if (!e.target.closest('.vjs-control-bar')) {
                            vjs.paused ? playVid() : pauseVid();
                        }
                    }
                });
            }
        });
    }
};
initVideoJS();
