
# API - Nodejs + Docker

Simple API REST de autenticacion de usuarios conectada a una base de datos en la nube y desplegada en docker.



## Herramientas Utilizadas

- Nodejs
- Express
- MongoDB
- Mongoose
- Express-validator
- Json Web Token
- Docker

## Pasos para iniciar la api

1) Clonar el repositorio con el comando

```bash
  git clone 'url del repositorio'
```



2) ejecutar en la consola para instalar las dependencias

```bash
  npm install
```

3) ejecutar en la consola para iniciar el servidor

```bash
  npm run dev
```


## Configuracion de docker para desplegar nuestra api rest

1) Configurar nuestro archivo 'Dockerfile'
a)  FROM: especificamos que version de node va a    tener nuestra aplicacion.
 
b) RUN: ejercutamos mkdir para la creeacion de la ruta que colocamos despues en caso de que no esten creadas.

c) WORKDIR: Es la ruta de trabajo en donde estara alojada nuestra app.


d) COPY: Copiamos todos los archivos llamados package.json, de esa manera importamos todas las dependencias de la api. Luego el segundo . indica donde los va a alojar, en este caso en la ruta especificada en WORKDIR

e) RUN: Ejecuta npm install para instalar las dependencias

f) COPY: En este caso, va a copiar los demas archivos (carpetas, archivos .env, etc), hacia la ruta raiz

g) EXPOSE: colocamos en que puerto va a correr la app

h) CMD: colocamos las palabras claves en donde va a iniciar el servidor, y eso se configura en el package.json:
```bash
  "dev": "nodemon app.js"
```
```bash
  FROM node:20

  RUN mkdir -p /usr/src/app

  WORKDIR /usr/src/app

  COPY package*.json ./

  RUN npm install

  COPY . .

  EXPOSE 3000

  CMD [ "npm", "run", "dev" ]
```





