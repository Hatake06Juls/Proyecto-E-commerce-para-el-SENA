let carrito = JSON.parse(localStorage.getItem("carrito_kult")) || [];

const botonesComprar = document.querySelectorAll(".btn-comprar");
const contadorCarrito = document.querySelector("#carrito");
const totalCarritoDOM = document.querySelector("#total-carrito");

actualizarCarrito();

botonesComprar.forEach(boton => {
    boton.addEventListener("click", (e) => {
        e.preventDefault();

        const nombre = boton.getAttribute("data-nombre");
        const precio = parseFloat(boton.getAttribute("data-precio"));

        const productoSeleccionado = {
            nombre: nombre,
            precio: precio
        };

        carrito.push(productoSeleccionado);
        
        localStorage.setItem("carrito_kult", JSON.stringify(carrito));

        actualizarCarrito();
    });
});

function actualizarCarrito() {
    if (contadorCarrito) {
        contadorCarrito.textContent = carrito.length < 10 ? `0${carrito.length}` : carrito.length;
    }

    const totalPagar = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);

    const totalFormateado = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(totalPagar);

    if (totalCarritoDOM) {
        totalCarritoDOM.textContent = totalFormateado;
    }
}