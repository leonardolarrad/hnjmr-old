# HNJMR
Sistema Informático Hospital de Niños JMR

<p align="center">
  <img src="https://i.imgur.com/PJcHBQx.jpeg" width=80%>
</p>

# Prerrequisitos
## Node.js

Debemos tener [Node.js](https://nodejs.org/en/) instalado, verificamos haciendo

    $ node --version

# Compilar

Instalamos los modulos necesarios usando npm

    $ cd app
    $ npm install 

Como paso opcional activamos el seguimiento de tailwindcss (solo para compilar cambios en archivos html/css)

    $ npx tailwindcss -i ./src/content/styles/input.css -o ./src/content/styles/output.css --watch 

De haber ejecutado el paso anterior, se debe abrir una consola adicional.
Compilamos y ejecutamos la app. 

    $ cd app
    $ npm start
