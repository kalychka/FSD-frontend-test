import '@/entry/index.js'

import '@/styles/room-details.scss'

import '@components/header/header.js'

import '@components/icon-text-list/icon-text-list.js'

import '@components/comment/comment.js'

import '@components/booking-form/booking-form.js'

import '@components/bullet-list/bullet-list.js'

import '@components/footer/footer.js'

$(document).ready(function() {
    $('.gallery-mobile').slick({
        dots: false,
        arrows: false,
        mobileFirst: true,
        autoplay: true,
        
    })
})