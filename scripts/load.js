window.addEventListener('load', function () {
  const loader = document.querySelector('.loader');
  loader.classList.add('close_loader');

  setTimeout(function () {
    loader.style.display = 'none';
    document.body.style.overflow = 'auto'; // Habilitar el desplazamiento nuevamente
  }, 500);
});
