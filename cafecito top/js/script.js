// ==========================
// ANIMACIÓN AL HACER SCROLL
// ==========================

const tarjetas = document.querySelectorAll(".tarjeta");

const mostrarTarjetas = () => {
    const alturaPantalla = window.innerHeight;

    tarjetas.forEach((tarjeta) => {
        const posicion = tarjeta.getBoundingClientRect().top;

        if (posicion < alturaPantalla - 100) {
            tarjeta.style.opacity = "1";
            tarjeta.style.transform = "translateY(0)";
        }
    });
};

tarjetas.forEach((tarjeta) => {
    tarjeta.style.opacity = "0";
    tarjeta.style.transform = "translateY(50px)";
    tarjeta.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", mostrarTarjetas);
window.addEventListener("load", mostrarTarjetas);