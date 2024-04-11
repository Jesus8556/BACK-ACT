const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0/smart")
.then(db => console.log("Conectado a mongo"))
.catch(error => console.log(error))