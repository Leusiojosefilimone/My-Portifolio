const title = document.querySelector('.write')
const text  =title.innerHTML
var index = 0


const escrever = () => {
    title.innerHTML = title.innerHTML.replace('|', '')
    if(text.length > index){
        if(index === 0){
            title.innerHTML = text.charAt(index)
        }else{
            title.innerHTML+= text.charAt(index)
        }
        title.innerHTML += '|'
    }
    index++
    setTimeout(escrever, 50)
}
escrever()

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

const menu = document.querySelector('.menu')

function ToggleMenu(){
  menu.classList.toggle('open')
}