const slides = document.querySelectorAll(".slides img");
let indiceSlide = 0;
let intervaloID = null;

// iniciarSlider();
document.addEventListener("DOMContentLoaded", iniciarSlider);//depois que tudo carregar

function iniciarSlider(){

    if(slides.length > 0){
        slides[indiceSlide].classList.add("mostrarSlide");
        intervaloID = setInterval(nextSlide, 5000);  
    }
}

function mostrarSlide(indice){

    if(indice >= slides.length){
        indiceSlide = 0;
    } else if(indice < 0){
        indiceSlide = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("mostrarSlide");
    });

    slides[indiceSlide].classList.add("mostrarSlide");
}   

function prevSlide(){
    clearInterval(intervaloID);
    indiceSlide--;
    mostrarSlide(indiceSlide);
}

function nextSlide(){
    indiceSlide++;
    mostrarSlide(indiceSlide);
}