document.addEventListener('DOMContentLoaded', () => {
  const openMobile = document.getElementById('open_nav');
  const menuMobile = document.querySelector('.items');

  openMobile.addEventListener('click', () => {
    if (openMobile.checked === true) {
      menuMobile.classList.add('open_mobile_nav');
    } else {
      menuMobile.classList.add('close_mobile_nav');

      setTimeout(() => {
        menuMobile.classList.remove('close_mobile_nav');
        menuMobile.classList.remove('open_mobile_nav');
      }, 500);
    }
  });

  menuMobile.addEventListener('click', (e) => {
    if (e.target.matches('.menu_element')) {
      // cerrar el menu al dark click a cualquier elemento
      openMobile.checked = false;
    }
  });
});
