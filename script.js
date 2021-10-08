let numSlide = 1
mostrarSlide(numSlide)

function mudarSlide(ns) {
    mostrarSlide(numSlide += ns)
}

function slideAtual(ns) {
    mostrarSlide(numSlide = ns)
}

function mostrarSlide(ns) {
    let slides = document.getElementsByClassName("slide")
    let indicadores = document.getElementsByClassName("indicador")
    
    if (ns > slides.length) {
        numSlide = 1
    }
    if (ns < 1) {
        numSlide = slides.length
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    for (let i = 0; i < indicadores.length; i++) {
        indicadores[i].className = indicadores[i].className.replace(" ativo", "")
    }

    slides[numSlide - 1].style.display = "block"
    indicadores[numSlide - 1].className += " ativo"
    console.log(indicadores)
}