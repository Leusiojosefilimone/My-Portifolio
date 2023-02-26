var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: "swiper-pagination"
    },
    mausewheel: true,
    keyboard: true
})

export default swiper