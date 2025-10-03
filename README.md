# 🛡️ Reto Frontend - Rimac Seguros

Este proyecto fue desarrollado como parte de un **challenge técnico** para la posición de **Frontend Developer** en Rimac Seguros.  
La aplicación simula el flujo de cotización de un seguro, desde el login hasta el resumen del plan elegido.

---

## 🚀 Tecnologías utilizadas
- **React 18** con React Router DOM
- **Sass (SCSS)** para estilos
- **BEM** como metodología de nomenclatura
- **JavaScript (ES6+)**
- **LocalStorage** para persistencia
- **Fetch API** para consumo de servicios REST
- **Git & GitHub** para control de versiones

---

## 📌 Funcionalidades principales
✔️ **Login** con validación estricta de datos (DNI, celular y checkboxes obligatorios).  
✔️ **Consumo de API** para obtener información de usuario y planes disponibles.  
✔️ **Filtrado dinámico** de planes según la edad del usuario.  
✔️ **Aplicación de descuento** del 5% al cotizar para “alguien más”.  
✔️ **Selección de plan** y guardado en LocalStorage.  
✔️ **Vista de resumen** con los datos del usuario, formulario y plan seleccionado.  
✔️ **Rutas protegidas**: no es posible acceder a `/planes` ni `/resumen` sin antes pasar por login.  
✔️ **Diseño responsive** y semántico.  

---

## 🛠️ Instalación y ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/TuUsuario/rimac-challenge.git
   cd rimac-challenge
2. Instalar dependencias:
   ```bash
   npm install
3. Ejecutar en modo desarrollo:
   ```bash
   npm start
4. Generar build de producción:
   ```bash
   npm run build

## 🌐 Deploy

El proyecto está desplegado en Netlify:
👉 [Ver demo aquí](https://challange-flor-tinco.netlify.app/)

##   ✨ Autor

Flor Andrea Tinco Quispe
👩‍💻 Frontend Developer
📍 Perú
