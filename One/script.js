const mobile = document.querySelector('.mobile')
const  menu= document.querySelector('.list-items')

function mobileMenu(){
    mobile.classList.toggle('active')
    menu.classList.toggle('active')
}

function closeMenu(){
    menu.classList.toggle('active')
}