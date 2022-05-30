let linksResponsive = document.querySelector('#linksResponsive');
let burgerButton = document.querySelector('#burgerBtn');
var menuOpened = false;

function burgerButtonCLicked() {
    console.log('ca marche')
    if (menuOpened == false) {
        linksResponsive.style.animation = 'menuAppear 0.2s linear';
        linksResponsive.style.top = '0px';
        burgerButton.src = 'closeIcon.png';
        burgerButton.style.scale = '0.9';
        menuOpened = true;
    }
    else {
        linksResponsive.style.animation = 'menuDisappear 0.2s linear';
        linksResponsive.style.top = '-50%';
        burgerButton.style.scale = '1'
        burgerButton.src = 'burgerIcon.png';
        menuOpened =false;
    }
}
linksResponsive.addEventListener("click",burgerButtonCLicked);
