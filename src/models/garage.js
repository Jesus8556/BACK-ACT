const mongoose = require("mongoose")

const garageSchema = mongoose.Schema(
    {
        address: {
            type: String,
            required: true
        },
        description:{
            type:String,
            required:true
        },
        isAvailable: {
            type: String,
            required: true
        },
        pricePerHour:{
            type:Number,
            required: true
        },
        image:{
            type:String,

        },
        user:{
            ref:"User",
            type:mongoose.Schema.Types.ObjectId

        }
    },{
        timestamps:true,
        versionkey:false
    }
) 

const Garage = mongoose.model('Garage',garageSchema);

module.exports = {
    Garage
}
