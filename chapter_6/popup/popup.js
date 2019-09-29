const button = document.querySelector('button');
const popupWrapper = document.querySelector('.popup-wrapper');
const popupClose = document.querySelector('.popup-close');
const popup = document.querySelector('.popup');

button.addEventListener('click', () => {
    popupWrapper.style.display = 'block';
});

popupClose.addEventListener('click', () => {
    popupWrapper.style.display = 'none';
});

popupWrapper.addEventListener('click', () => {
    popupWrapper.style.display = 'none';
});

popup.addEventListener('click', (evt) => {
    evt.stopPropagation();
});