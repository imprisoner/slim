// import Swiper from "swiper";
const slider = new Swiper('.swiper-container', {
    speed: 400,
    // loop: true,
    navigation: {
        slideClass: '.projects-slide',
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

// yandex-map pointer-events switching

document.addEventListener('click', (e) => {
    const map = document.querySelector('.map-section iframe')
    console.log('event: ', e)
    console.log(map)
    console.log(e.target)
    if(e.target.className === 'map-section') {
        map.style.pointerEvents = 'all'
    } else {
        map.style.pointerEvents = 'none'
    }
})