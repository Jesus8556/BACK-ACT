const mongoose = require("mongoose")

const propuestaSchema = mongoose.Schema(
    {
        filtroAlquiler:{
            type:Boolean,
            required:true
        },
        monto:{
            type:Number,
            require:true
        },
        user:{
            ref:"User",
            type:mongoose.Schema.Types.ObjectId
        }
    },
    {
        timestamps:true,
        versionkey:false
    }

)

const Propuesta = mongoose.model('Propuesta',propuestaSchema);

module.exports = {
    Propuesta
}