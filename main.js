const submitButton = document.querySelector('.submit');
const desktopThanks = document.querySelector('#containerThanks');
const desktopDesign = document.querySelector('#container');

submitButton.addEventListener('click', toggleDesktopThanks);

function toggleDesktopThanks() {
    desktopDesign.classList.add('inactive');
    desktopThanks.classList.toggle('inactive');
}