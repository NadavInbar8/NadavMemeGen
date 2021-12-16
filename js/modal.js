'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
const body = document.querySelector('body');

//open and close modal functions
const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  // body.classList.add('noOverflow');
};
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  body.classList.remove('noOverflow');
};
// click to open the modal
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

// click to close the modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// click escape to close the modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
