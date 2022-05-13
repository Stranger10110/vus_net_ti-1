let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = () => {
    page.classList.toggle('dark-theme');
}