const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');
const indicadores = document.querySelector('.indicadores');

/* ------ Event Listener las flechas de desplazamiento ------ */
const flecha_izquierda = document.getElementById('flecha-izquierda');
const flecha_derecha = document.getElementById('flecha-derecha');

flecha_derecha.addEventListener('click', () => {
  fila.scrollLeft += fila.offsetWidth;

  const indicadorActivo = document.querySelector('.indicadores .activo');
  if (indicadorActivo.nextSibling) {
    indicadorActivo.nextSibling.classList.add('activo');
    indicadorActivo.classList.remove('activo');
  }

});

flecha_izquierda.addEventListener('click', () => {
  fila.scrollLeft -= fila.offsetWidth;

  const indicadorActivo = document.querySelector('.indicadores .activo');
  if (indicadorActivo.previousSibling) {
    indicadorActivo.previousSibling.classList.add('activo');
    indicadorActivo.classList.remove('activo');
  }
});

/* ----- Paginacion --------*/
const numero_pags = Math.ceil(peliculas.length / 5);

// Por cada página se agrega un indicador (Un botón)
for (let i = 0; i < numero_pags; i++) {
  const indicador = document.createElement('button');

  if (i === 0) {
    indicador.classList.add('activo');
  }

  indicador.addEventListener('click', (e) => {
    fila.scrollLeft = i * fila.offsetWidth;

    document.querySelector('.indicadores .activo').classList.remove('activo');
    e.target.classList.add('activo');

    /*  (fila.scrollLeft === 0) ? (flecha_izquierda.hidden = true) : (flecha_izquierda.hidden = false);
 
     (fila.scrollLeft === (fila.offsetWidth * numero_pags - fila.offsetWidth)) ? (flecha_derecha.hidden = true) : (flecha_derecha.hidden = false); */

  });

  // Agregamos el elemento al contenedor de indicadores
  indicadores.appendChild(indicador);

}


/* ------ Hover -------*/
peliculas.forEach((pelicula) => {
  pelicula.addEventListener('mouseenter', (e) => {

    const element = e.currentTarget;
    peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
    element.classList.add('hover');

    /* setTimeout(() => {
      peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
      element.classList.add('hover');
    }, 300); */

  });

});

// Se elimina la clase hover cuando se saca el cursor del carousel
fila.addEventListener('mouseleave', () => {
  peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
})