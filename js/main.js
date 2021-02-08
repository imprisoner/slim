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
    if (e.target.className === 'map-section') {
        map.style.pointerEvents = 'all'
    } else {
        map.style.pointerEvents = 'none'
    }
})

// fixed header 

const header = document.querySelector('.header')
const nav = document.querySelector('.header-nav').style
let scroll = document.documentElement.scrollTop
window.onscroll = () => {

    if (document.documentElement.scrollTop >= 782) {
        header.classList.add('fixed')
        nav.padding = '5px 0'

        if (document.documentElement.scrollTop < scroll) {
            header.style.transition = 'ease 0.3s'
            header.style.transform = 'translateY(0)'
        } else {
            header.style.transform = ''
        }
        scroll = document.documentElement.scrollTop
    } else {
        header.classList.remove('fixed')
        nav.padding = ''
        header.style.transform = ''
        header.style.transition = ''
    }

}