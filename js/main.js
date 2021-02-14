// const Swiper = require("swiper")

// import Swiper from 'swiper'
// Swiper.use(Navigation, EffectFade)

const slider = new Swiper('.swiper-container', {
    speed: 400,
    navigation: {
        slideClass: '.projects-slide',
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

const cardSlider = new Swiper('.swiper-container.cards-slider', {
    speed: 400,
    navigation: {
        slideClass: '.swiper-slide',
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

// yandex-map pointer-events switching
const map = document.querySelector('.map-section iframe')
document.addEventListener('click', (e) => {
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

// nav-menu slider

const navlinks = document.querySelectorAll('.nav-link-block')
const navSlider = document.querySelector('.nav-link-underline')
const setActiveClass = (e) => {
    navlinks.forEach((link) => {
        link.classList.remove('active')
    })

    e.currentTarget.classList.add('active')

}

function showSlider(e) {
    navSlider.style.display === 'none' ? navSlider.style.display = 'block' : null
    navlinks.forEach(link => link.removeEventListener('click', showSlider))

}
navlinks.forEach((link) => {
    link.addEventListener('click', setActiveClass)
    link.addEventListener('click', showSlider)

})

// mobile nav-menu

const navIcon = document.querySelector('.nav-menu-icon')
const navMenu = document.querySelector('.header-nav .mobile-nav')
navIcon.addEventListener('click', () => {
    navMenu.style.display === 'none' ? navMenu.style.display = 'block' : navMenu.style.display = 'none'
})