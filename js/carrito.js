let carrito = JSON.parse(localStorage.getItem("carrito_kult")) || [];

const botonesComprar = document.querySelectorAll(".btn-comprar");
const contadorCarrito = document.querySelector("#carrito");
const totalCarritoDOM = document.querySelector("#total-carrito");

const btnAbrirCarrito = document.querySelector(".cart");
const modalCarrito = document.querySelector("#modal-carrito");
const btnCerrarModal = document.querySelector("#cerrar-modal");
const listaCarritoDOM = document.querySelector("#lista-carrito");
const modalTotalCop = document.querySelector("#modal-total-cop");
const btnVaciarCarrito = document.querySelector("#vaciar-carrito");

actualizarCarrito();

botonesComprar.forEach(boton => {
    boton.addEventListener("click", (e) => {
        e.preventDefault();

        const nombre = boton.getAttribute("data-nombre");
        const precio = parseFloat(boton.getAttribute("data-precio"));

        carrito.push({ nombre, precio });
        guardarYActualizar();
    });
});

if (btnAbrirCarrito && modalCarrito) {
    btnAbrirCarrito.addEventListener("click", (e) => {
        e.preventDefault();
        modalCarrito.classList.remove("producto-oculto");
    });
}

if (btnCerrarModal && modalCarrito) {
    btnCerrarModal.addEventListener("click", () => {
        modalCarrito.classList.add("producto-oculto");
    });
}

if (btnVaciarCarrito) {
    btnVaciarCarrito.addEventListener("click", () => {
        carrito = [];
        guardarYActualizar();
    });
}

function guardarYActualizar() {
    localStorage.setItem("carrito_kult", JSON.stringify(carrito));
    actualizarCarrito();
}

function actualizarCarrito() {
    if (contadorCarrito) {
        contadorCarrito.textContent = carrito.length < 10 ? `0${carrito.length}` : carrito.length;
    }

    const totalPagar = carrito.reduce((acc, prod) => acc + prod.precio, 0);

    const totalFormateado = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(totalPagar);

    if (totalCarritoDOM) totalCarritoDOM.textContent = totalFormateado;
    if (modalTotalCop) modalTotalCop.textContent = totalFormateado;

    renderizarLista();
}

function renderizarLista() {
    if (!listaCarritoDOM) return;

    listaCarritoDOM.innerHTML = "";

    if (carrito.length === 0) {
        listaCarritoDOM.innerHTML = `<li class="mono" style="color: var(--muted); font-size: 0.85rem; padding: 12px 0;">El carrito está vacío.</li>`;
        return;
    }

    carrito.forEach((item, index) => {
        const itemLi = document.createElement("li");
        itemLi.style.cssText = "display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; border-bottom: 1px dashed #333; padding-bottom: 8px;";
        
        const precioCOP = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(item.precio);

        itemLi.innerHTML = `
            <div>
                <strong style="display: block; font-size: 0.85rem;">${item.nombre}</strong>
                <span style="font-size: 0.75rem; color: var(--muted);">${precioCOP}</span>
            </div>
            <button onclick="eliminarDelCarrito(${index})" style="background: none; border: none; color: #ff4444; cursor: pointer; font-size: 0.8rem;" title="Eliminar">[x]</button>
        `;

        listaCarritoDOM.appendChild(itemLi);
    });
}

window.eliminarDelCarrito = function(index) {
    carrito.splice(index, 1);
    guardarYActualizar();
};