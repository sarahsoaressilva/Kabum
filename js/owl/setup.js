$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

//Função Modal
function iniciaModal(modalID) {
    const variavel = document.getElementById(modalID);
    variavel.style.opacity = 1;
    variavel.classList.add('mostrar');

}
