let toogleButton = document.getElementById('toogleButton');
let navbarLinks = document.getElementById('navbarLinks');
let wrapperMargin = document.getElementById('wrapperMargin');
toogleButton.addEventListener('click',function(){
    navbarLinks.classList.toggle('active');
    wrapperMargin.classList.toggle('active');

})