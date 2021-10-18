let numSlide = 1
mostrarSlide(numSlide,"vba-excel")
mostrarSlide(numSlide,"php-mysql")
mostrarSlide(numSlide,"ahk")

function mudarSlide(ns, app) {
    mostrarSlide(numSlide += ns, app)
}

function slideAtual(ns, app) {
    mostrarSlide(numSlide = ns, app)
}

function mostrarSlide(ns, app) {
    let elem = document.getElementById(app)
    let slides = elem.getElementsByClassName("slide")
    let indicadores = elem.getElementsByClassName("indicador")
    
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
}