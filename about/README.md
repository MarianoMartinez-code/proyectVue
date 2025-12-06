# 👤 About Page with Vue.js

¡Bienvenido al proyecto **About Page**! Este es un ejemplo sencillo y elegante de una página de "Sobre mí" construida utilizando **Vue.js 3** (CDN) para el manejo dinámico de datos y eventos.

![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## 📖 Descripción

Este proyecto demuestra los conceptos básicos de Vue.js, integrando reactividad en una página web estática. La aplicación muestra información personal dinámica, realiza cálculos en tiempo real y genera contenido aleatorio.

### 🌟 Características Principales

*   **Renderizado Declarativo**: Muestra datos como nombre y edad directamente desde el modelo de Vue.
*   **Métodos Dinámicos**:
    *   `agePlusFive()`: Calcula la edad futura del usuario en 5 años.
    *   `randomNumber()`: Genera un número aleatorio entre 1 y 10.
*   **Enlace de Atributos (v-bind)**: Gestiona dinámicamente enlaces, como el de la película favorita.
*   **Diseño Limpio**: Estilizado con CSS nativo para una apariencia moderna y responsiva.

## 🛠️ Tecnologías

*   **HTML5**: Estructura semántica de la página.
*   **CSS3**: Estilos personalizados (`styles.css`).
*   **Vue.js 3**: Framework de JavaScript progresivo (usado vía CDN).

## 🚀 Cómo Usar

No se requiere instalación de Node.js ni herramientas de compilación complejas.

1.  **Clona o Descarga** este repositorio.
2.  Abre el archivo `index.html` directamente en tu navegador web favorito (Chrome, Firefox, Edge, etc.).

Alternativamente, puedes usar una extensión como "Live Server" en VS Code para una experiencia de desarrollo más fluida.

## 📂 Estructura del Proyecto

*   `index.html`: El punto de entrada principal. Contiene la estructura y la importación de scripts.
*   `app.js`: La lógica de la aplicación Vue. Define el estado (`data`) y el comportamiento (`methods`).
*   `styles.css`: Hoja de estilos para dar formato a la presentación.

## 📝 Código Destacado

Ejemplo de cómo Vue maneja la lógica en `app.js`:

```javascript
const app = Vue.createApp({
    data() {
        return {
            name: "Mariano",
            age: 23,
            // ... más datos
        }
    },
    methods: {
        agePlusFive() {
            return this.age + 5
        }
    }
})
```

---
Hecho con 💚 aprendiendo Vue.js
