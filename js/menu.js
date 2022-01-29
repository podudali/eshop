document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body")
    const menu = document.querySelector(".nav__content__menu")
    const burger =  document.querySelector(".menu-burger__header")

    const closeBurger = () => {
        menu.classList.remove("open")
        body.classList.remove("fixed-page")
    }
    
    burger.addEventListener("click", (e) => {
        menu.classList.toggle("open")
        body.classList.toggle("fixed-page")
    })

    const mobileMenuLinks = document.querySelectorAll('.nav__content__menu__item')
    mobileMenuLinks.forEach(l => {
        l.addEventListener("click", () => {
            closeBurger()
        })
    })
})
