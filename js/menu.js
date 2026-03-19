const btn = document.querySelector(".menu-btn")
const menu = document.querySelector(".menu")
const icon = btn.querySelector("i")

btn.addEventListener("click", () => {
    menu.classList.toggle("active")

    if(menu.classList.contains("active")){
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-xmark")
    } else {
        icon.classList.remove("fa-xmark")
        icon.classList.add("fa-bars")
    }
})

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active")
        icon.classList.remove("fa-xmark")
        icon.classList.add("fa-bars")
    })
})

function abrirWhatsapp(){

let numero = "5519993047238"
let mensagem = "Olá, gostaria de saber mais sobre os treinos!"

let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`

window.open(url, "_blank")

}

