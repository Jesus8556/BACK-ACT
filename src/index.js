const app = require("./app")
require("./database")
app.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
  });