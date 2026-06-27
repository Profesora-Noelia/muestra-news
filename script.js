/* =========================================================
   PARÁMETROS IFTS 29 - INTERACTIVIDAD COMPLETA
========================================================= */

// Índice dinámico para controlar el carrusel de fotos
let indexCarrusel = 0;

/**
 * Desplaza las fotos del carrusel hacia adelante o hacia atrás
 */
function moverCarrusel(direccion) {
    const track = document.getElementById('sliderTrack');
    if (!track) return; // Control por si la sección no se incluye
    
    const totalSlides = track.children.length;
    
    // Calcula la posición y previene desbordes cíclicamente
    indexCarrusel = (indexCarrusel + direccion + totalSlides) % totalSlides;
    
    // Desplaza el track horizontalmente basado en el índice
    track.style.transform = `translateX(-${indexCarrusel * 100}%)`;
}

/**
 * Alterna la visualización de solapas de video (Tabs independientes por contenedor)
 */
function abrirSolapa(evt, nombreSolapa) {
    // 1. Encontramos en qué contenedor específico hizo clic el usuario
    let contenedor = evt.currentTarget.closest('.video-tabs-container');
    
    // 2. Buscamos y ocultamos SOLO los videos dentro de ESTE contenedor
    let contenidos = contenedor.getElementsByClassName("tab-content");
    for (let i = 0; i < contenidos.length; i++) {
        contenidos[i].style.display = "none";
    }

    // 3. Desactivamos SOLO los botones dentro de ESTE contenedor
    let botones = contenedor.getElementsByClassName("tab-btn");
    for (let i = 0; i < botones.length; i++) {
        botones[i].classList.remove("active");
    }

    // 4. Mostramos el video solicitado y pintamos el botón tocado
    document.getElementById(nombreSolapa).style.display = "block";
    evt.currentTarget.classList.add("active");
}

/**
 * Expande o contrae el bloque de audio (Acordeón)
 */
function toggleAudio(elementoHeader) {
    elementoHeader.classList.toggle("active");
    let contenido = elementoHeader.nextElementSibling;
    
    if (contenido.style.maxHeight) {
        contenido.style.maxHeight = null;
    } else {
        contenido.style.maxHeight = contenido.scrollHeight + 40 + "px";
    }
}