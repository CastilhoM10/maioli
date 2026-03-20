window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "0.6s";

    setTimeout(() => {
      loader.style.display = "none";
    }, 600);

  }, 2200); // espera a animação terminar
});