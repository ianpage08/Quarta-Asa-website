//menu hamburguer
const btnMenu = document.getElementsByClassName('menu-hamburguer')[0]
const menu = document.getElementsByClassName('menu')[0]

if(btnMenu && menu){
    btnMenu.addEventListener('click', () => {
        menu.classList.toggle('active')
        btnMenu.classList.toggle('active')
        
        
    })
}    