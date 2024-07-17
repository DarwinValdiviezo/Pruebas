# Full MERN Stack Inventory System

Este proyecto es un sistema de inventario con roles de usuario y administrador. Está construido utilizando la pila MERN (MongoDB, Express, React y Node.js) y cuenta con integraciones para manejo de imágenes con Cloudinary, envío de correos con Nodemailer y autenticación de usuarios.

## Características

- Gestión de inventarios
- Roles de usuario y administrador
- Autenticación y autorización con JWT
- Integración con Cloudinary para gestión de imágenes
- Envío de correos con Nodemailer
- Base de datos MongoDB

## Instalación

### Prerrequisitos

- Node.js (v14 o superior)
- MongoDB
- MongoDB Compass
- NPM (gestor de paquetes de Node.js)

### Clonación del Repositorio

Clona el repositorio a tu máquina local utilizando:

```bash
git clone https://github.com/DarwinValdiviezo/Pruebas.git
```

# Instalación de Dependencias

## Backend

### Navega al directorio backend e instala las dependencias:

cd Pruebas/backend
npm install

#### Crea un archivo .env en el directorio backend y añade las siguientes variables de entorno:

```bash
PORT=5000
MONGODB_URL=mongodb://localhost:27017/local
JWT_SECRET=your_very_secret_key
MAIL_ID=darwinrvaldiviezo@gmail.com
MP=vdom wywa zjii xzf

CLOUD_NAME=dxfzqun74
API_KEY=197174332884282
SECRET_KEY=J2UrgRu9ORynT_mTagk49l-nqWA
```

## Admin

### Navega al directorio admin e instala las dependencias:

```bash
cd ../admin
npm install
```

# Frontend

## Navega al directorio frontend e instala las dependencias:

```bash
cd ../frontend
npm install
```

# Ejecución del Proyecto

## Backend

### Para iniciar el servidor backend, ejecuta:

```bash
cd ../backend
npm run server
```

El servidor backend debería estar corriendo en http://localhost:5000.

# Admin

## Para iniciar la aplicación de administración, ejecuta:

```bash
cd ../admin
npm start
```

La aplicación de administración debería estar corriendo en http://localhost:3000.

# Frontend

## Para iniciar la aplicación frontend, ejecuta:

```bash
cd ../frontend
npm start
```

La aplicación frontend debería estar corriendo en http://localhost:3001.

# Uso de MongoDB Compass

## Abre MongoDB Compass.

Conéctate a tu base de datos MongoDB local utilizando la URL mongodb://localhost:27017/local.
Explora y gestiona tus datos de inventario.

## Configuración de Cloudinary

Este proyecto utiliza Cloudinary para la gestión de imágenes. Las credenciales de Cloudinary se deben establecer en el archivo .env del backend. Asegúrate de tener una cuenta de Cloudinary y utiliza tus propias credenciales.

## Configuración de Nodemailer

Nodemailer se utiliza para el envío de correos electrónicos. Asegúrate de configurar correctamente tu correo electrónico y contraseña en el archivo .env del backend. Utiliza credenciales seguras y considera usar contraseñas de aplicaciones o tokens para mayor seguridad.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue los siguientes pasos:

- Haz un fork del proyecto.
- Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
- Realiza los cambios y commitea (git commit -m 'Añadir nueva funcionalidad').
- Haz push a la rama (git push origin feature/nueva-funcionalidad).
- Abre un Pull Request.

# Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

_Créditos a [DevJariwala5] por la idea original._

_¡Gracias por usar nuestro sistema de inventario! Si tienes alguna pregunta o problema, no dudes en abrir un issue._
