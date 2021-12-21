/**
 * Para ejecutar este módulo, crear un archivo con el nombre ".env"
 * Agregar una línea con la variable
 *         PORT=3000
 */

// Requiere el módulo dotenv para cargar variables de entorno
// require("dotenv").config();

require("dotenv").config();

const express = require("express");

const app = express();
const port = process.env.PORT;

/*
The method get() attached to express instance is one of the many route methods
 in Express.js, along with post(), put(), delete(), all(), etc.
 The path / passed to app.get() is the root of our project.
*/
app.get("/", callbackGetRoot);

/*
La aplicación escucha por el puerto configurado en la variable de ambiente
 PORT=3000
*/
app.listen(port, callbackListenPort);

/*
Las funciones callback se declaran por separado para explicar el concepto
*/
// Callback para el get de la raíz
function callbackGetRoot(req, res) {
  res.status(200).send("Hola, Mundo. Desde Express!!!"); // Esto se envía por el navegador
}

// Callback para escuchar por el puerto
function callbackListenPort() {
  console.log(`Servidor inició en el puerto ${port}`);
  console.log("\nAbre el navegador y abre la página http://localhost:3000");
  console.log("\nPor ahora, eso es todo lo que hace esta aplicación en el ejercicio");
}
