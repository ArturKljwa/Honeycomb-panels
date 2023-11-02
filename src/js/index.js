const buttonModal = document.querySelector('.button_modal');
const modal = document.querySelector('.popup');
const modalClose = document.querySelector('.popup_close');


buttonModal.addEventListener('click', () => {
modal.classList.add('popup_active')
})

modalClose.addEventListener('click', () => {
    modal.classList.remove('popup_active');
})

modal.addEventListener('click', (e) => {
if (e.target === modal) {
    modal.classList.remove('popup_active');
}
})