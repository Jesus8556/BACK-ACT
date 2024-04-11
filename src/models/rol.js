const mongoose = require("mongoose")
const rolSchema = mongoose.Schema(
    {
        name: {
            type: String,
        }
    },{
        versionKey : false
    }
) 
const Rol = mongoose.model('Role',rolSchema);

module.exports = {
    Rol
}