function abrirWhatsapp(){

let numero = "5519999999999"
let mensagem = "Olá, gostaria de saber mais sobre os treinos!"

let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`

window.open(url, "_blank")

}

//////// menu //////////
const toggle = document.querySelector(".menu-toggle")
const nav = document.querySelector(".nav-links")

toggle.addEventListener("click", () => {

nav.classList.toggle("active")

})