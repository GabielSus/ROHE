document.addEventListener('DOMContentLoaded', function(){
  let imagenes=[
    {img: 'galeria/iMG/1.png'},
    {img: 'galeria/iMG/2.png'},
    {img: 'galeria/iMG/3.png'},
    {img: 'galeria/iMG/4.png'},
    {img: 'galeria/iMG/5.jpg'},
    {img: 'galeria/iMG/6.jpg'},
    {img: 'galeria/iMG/7.jpg'},
    {img: 'galeria/iMG/8.jpg'},
    {img: 'galeria/iMG/9.jpg'},
    {img: 'galeria/iMG/10.webp'},
    {img: 'galeria/iMG/11.jpg'}
  ]; 
  let contador = 0;
  const overlay=document.querySelector('.overlay');
  const img_slideshow=document.getElementById('img_slideshow');

  Array.from(document.querySelectorAll('.galeria img[data-img-mostrar]')).forEach(img => {
    img.addEventListener('click', event => {
        const imagen_seleccionada = +event.target.dataset.imgMostrar;
        console.log("Selected image index:", imagen_seleccionada);
        console.log("Selected image source:", imagenes[imagen_seleccionada].img);
        img_slideshow.src = imagenes[imagen_seleccionada].img;
        contador = imagen_seleccionada;
        overlay.style.opacity = 1;
        overlay.style.visibility = 'visible';
    });
});

  document.querySelector('.btn_cerrar').addEventListener('click', ()=>{
    overlay.style.opacity=0;
    overlay.style.visibility='hidden';
  });

  document.querySelector('.atras').addEventListener('click', () => {
    if (contador > 0) {
        img_slideshow.src = imagenes[contador - 1].img;
        contador--;
    } else {
        img_slideshow.src = imagenes[imagenes.length - 1].img;
        contador = imagenes.length - 1;
    }
  });

  document.querySelector('.siguiente').addEventListener('click', () => {
    if (contador < imagenes.length - 1) {
        img_slideshow.src = imagenes[contador + 1].img;
        contador++;
    } else {
        img_slideshow.src = imagenes[0].img;
        contador = 0;
    }
  });

});
(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    


})();
