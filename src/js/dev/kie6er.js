import $ from 'jquery';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contacts-map') ? initMap() : null;
});

const markers = [
    {
        coordinate: [37.528583852499565, 55.73236309372132],
        active: false
    },
    {
        coordinate: [37.639430799072265, 55.76706090220457],
        active: true
    },
    {
        coordinate: [37.413914052694864, 55.722094359037655],
        active: false
    },
    {
        coordinate: [37.502834645956575, 55.69864047842252],
        active: false
    }
];

async function initMap() {
    await ymaps3.ready;
    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;
    const map = new YMap(document.getElementById('contacts-map'), {
        location: {
            center: [37.62144689941396, 55.75841908104248],
            zoom: 10
        }
    });
    map.addChild(new YMapDefaultSchemeLayer());
    map.addChild(new YMapDefaultFeaturesLayer({ zIndex: 1800 }));

    markers.forEach((el) => {
        let content = document.createElement('div');
        content.classList.add('map-marker');

        el.active ? $(content).addClass('active') : null;
        clickMarker(content, el);
        const marker = new YMapMarker({ coordinates: el.coordinate, draggable: false }, content);
        map.addChild(marker);
    });
}

function clickMarker(content, marker) {
    $(content).on('click', function () {
        changeMarkers(content, marker);
    });
}

function changeMarkers(content, marker) {
    $('.map-marker').removeClass('active');
    markers.forEach((el) => (el.active = false));
    marker.active = true;
    $(content).addClass('active');
}
