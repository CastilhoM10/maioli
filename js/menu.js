const toggle = document.querySelector(".menu-toggle")
const nav = document.querySelector(".nav-links")
const overlay = document.querySelector(".menu-overlay")
const icon = toggle.querySelector("i")

toggle.addEventListener("click", () => {
    nav.classList.toggle("active")
    overlay.classList.toggle("active")

    if(nav.classList.contains("active")){
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-x")
    } else {
        icon.classList.remove("fa-x")
        icon.classList.add("fa-bars")
    }
})

overlay.addEventListener("click", () => {
    nav.classList.remove("active")
    overlay.classList.remove("active")

    icon.classList.remove("fa-x")
    icon.classList.add("fa-bars")
})

/* FECHAR AO CLICAR NO LINK */

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active")
        overlay.classList.remove("active")

        icon.classList.remove("fa-x")
        icon.classList.add("fa-bars")
    })
})

function abrirWhatsapp(){

let numero = "5519999999999"
let mensagem = "Olá, gostaria de saber mais sobre os treinos!"

let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`

window.open(url, "_blank")

}

