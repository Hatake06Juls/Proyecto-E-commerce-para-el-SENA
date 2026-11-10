//FILTRO POR TALLA
const botonesTalla = document.querySelectorAll(".filtro-talla");
const listaProductos = document.querySelectorAll(".prod");

botonesTalla.forEach(boton => {
    boton.addEventListener("click", () => {
        const tallaSeleccionada = boton.getAttribute("data-talla");

        listaProductos.forEach(producto => {
            const tallasProducto = producto.getAttribute("data-tallas");

            if (tallaSeleccionada === "todos" || (tallasProducto && tallasProducto.includes(tallaSeleccionada))) {
                producto.classList.remove("producto-oculto");
            } else {
                producto.classList.add("producto-oculto");
            }
        });
    });
});

//FILTRO POR COLOR 
const botonesColor = document.querySelectorAll(".filtro-color");

botonesColor.forEach(boton => {
    boton.addEventListener("click", () => {
        const colorSeleccionado = boton.getAttribute("data-color");

        listaProductos.forEach(producto => {
            const colorProducto = producto.getAttribute("data-color");

            if (colorSeleccionado === "todos" || colorProducto === colorSeleccionado) {
                producto.classList.remove("producto-oculto");
            } else {
                producto.classList.add("producto-oculto");
            }
        });
    });
});