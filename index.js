const sidemenuEl = document.querySelector('.sidemenu');
const openMenBtn = document.querySelector('header button');
const closeMenuBtn = document.querySelector('.close-btn button');

function toggleSidemenu() {
    sidemenuEl.classList.toggle('open');
}

openMenBtn.addEventListener('click', toggleSidemenu);
closeMenuBtn.addEventListener('click', toggleSidemenu);