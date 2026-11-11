document.addEventListener("DOMContentLoaded", () => {
    const formLogin = document.querySelector("#login");
    const inputEmail = document.querySelector("#u");
    const inputPassword = document.querySelector("#pw");
    const btnEye = document.querySelector("#eye");

    if (btnEye && inputPassword) {
        btnEye.addEventListener("click", () => {
            const tipoActual = inputPassword.getAttribute("type");
            if (tipoActual === "password") {
                inputPassword.setAttribute("type", "text");
                btnEye.setAttribute("aria-pressed", "true");
            } else {
                inputPassword.setAttribute("type", "password");
                btnEye.setAttribute("aria-pressed", "false");
            }
        });
    }

    if (formLogin) {
        formLogin.addEventListener("submit", (e) => {
            e.preventDefault(); // Evitamos que recargue la página por defecto

            const emailValor = inputEmail.value.trim();
            const passwordValor = inputPassword.value.trim();

            removerErroresVisuales();

            let esValido = true;

            if (emailValor === "") {
                mostrarError(inputEmail, "El identificador o correo es obligatorio.");
                esValido = false;
            } else if (!validarEmail(emailValor)) {
                mostrarError(inputEmail, "Por favor, ingresa un correo electrónico válido.");
                esValido = false;
            }

            if (passwordValor === "") {
                mostrarError(inputPassword, "La contraseña cifrada es obligatoria.");
                esValido = false;
            } else if (passwordValor.length < 6) {
                mostrarError(inputPassword, "La contraseña debe tener al menos 6 caracteres.");
                esValido = false;
            }

            if (esValido) {
                localStorage.setItem("kult_sesion_activa", "true");
                localStorage.setItem("kult_usuario", emailValor);

                alert("¡Acceso concedido al protocolo KULT! Redirigiendo...");

                window.location.href = "index.html";
            }
        });
    }

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function mostrarError(inputElement, mensaje) {
        const contenedorField = inputElement.closest(".field") || inputElement.parentElement;

        inputElement.style.borderColor = "#ff4444";

        let errorSpan = contenedorField.querySelector(".error-msg");
        if (!errorSpan) {
            errorSpan = document.createElement("span");
            errorSpan.className = "error-msg mono";
            errorSpan.style.cssText = "color: #ff4444; font-size: 0.7rem; margin-top: 4px; display: block;";
            contenedorField.after(errorSpan);
        }
        errorSpan.textContent = `[Error: ${mensaje}]`;
    }

    function removerErroresVisuales() {
        [inputEmail, inputPassword].forEach(input => {
            input.style.borderColor = "";
            const contenedorField = input.closest(".field") || input.parentElement;
            const errorSpan = contenedorField.nextElementSibling;
            if (errorSpan && errorSpan.classList.contains("error-msg")) {
                errorSpan.remove();
            }
        });
    }
});