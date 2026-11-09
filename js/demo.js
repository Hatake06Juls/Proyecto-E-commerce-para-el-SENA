const grid = document.querySelector(".grid");

const tarjetas = document.querySelectorAll(".prod");





const tituloProducto = document.querySelector("h3");

console.log(tarjetas.length);





console.log(tituloProducto.textContent);

const tituloDestacado = document.querySelector("#destacado");
tituloDestacado.textContent = "Camiseta TOP";
tituloDestacado.classList.add("Destacado");
tituloDestacado.classList.toggle("Oculto");

const li = document.createElement("li");
li.textContent = "Elemento Nuevo ";
document.querySelector("#lista").appendChild(li);

tituloDestacado.setAttribute("tittle", "Mi lista");


//// Componente carrito
const contador = document.querySelector("#carrito");
//console.log(contador.textContent);
contador.textContent = "05";


//Tallas
const tallas = document.querySelectorAll(".tallas button");
//console.log("tallas", tallas.length);
//TtallaXS.setAttribute("aria-pressed", true);

tallas.forEach((b) => {
    b.addEventListener("click", () => {
        const on =
        b.getAttribute("aria-pressed");
        b.setAttribute("aria.pressed", on !== true);
    });
});

// COPONENTE FILTROS
document.querySelector("#filters"). classList.toggle("open");