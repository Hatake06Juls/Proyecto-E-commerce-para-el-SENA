# KULT STUDIO · E-Commerce Platform (HTML5 & CSS3)

Plataforma de comercio electrónico de indumentaria experimental desarrollada con arquitectura modular basada exclusivamente en **HTML5 semántico** y **Vanilla CSS estructurado**, cumpliendo con los estándares de maquetación y diseño web moderno sin dependencias ni lenguajes de scripting.

## 📁 Estructura del Proyecto

```text
tienda-online/
├── index.html              # Landing principal (Drop 04 Hyperstructure)
├── coleccion.html          # Catálogo técnico de prendas y filtros
├── login.html              # Portal de acceso y autenticación
├── registro.html           # Registro de miembros para listas privadas
├── recuperar.html          # Flujo de recuperación de credenciales
├── contacto.html           # Centro de contacto y soporte oficial
├── mantenimiento.html      # Página de mantenimiento programado
├── css/
│   ├── base.css            # Design tokens, variables CSS, reset y tipografía
│   ├── layout.css          # Ticker superior, cabecera sticky, navegación y footer
│   ├── components.css      # Botones, campos de formulario, tags y badges
│   ├── home.css            # Estilos específicos de la landing (Hero, Marquee, Craft)
│   ├── coleccion.css       # Layout del catálogo, sidebar de filtros y tarjetas de producto
│   ├── auth.css            # Estilos para vistas de autenticación
│   └── mantenimiento.css   # Estilos e ilustración isométrica de mantenimiento
└── img/                    # Activos visuales y multimedia
    ├── img1.webp           # Fotografía de producto en formato optimizado
    └── logo.svg            # Isotipo vectorial de la marca
```

## 🛠️ Tecnologías y Estándares
- **HTML5 Semántico**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>`.
- **CSS Modular**: Variables CSS nativas (`:root`), Responsive Design con CSS Grid y Flexbox.
- **Tipografías**: Google Fonts (*Syne*, *Space Mono*, *Inter*).
- **Accesibilidad & SEO**: Metadatos descriptivos, jerarquía semántica `h1-h4`, atributos `alt` y `aria-label`.
- **Control de Versiones**: Commits atómicos basados en la especificación *Conventional Commits* enfocados 100% en HTML y CSS.
