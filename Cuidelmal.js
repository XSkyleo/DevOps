// Ejemplo de código inseguro en app.js
const usuario = process.argv[2];
// Vulnerabilidad: Inyección de código mediante eval()
eval("console.log('Usuario conectado: ' + " + usuario + ");");
