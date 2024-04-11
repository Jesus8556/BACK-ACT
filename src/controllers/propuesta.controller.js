const { Propuesta } = require("../models/propuesta");

const getPropuesta = async (req,res) =>{
    try{
        const propuesta = await Propuesta.find()
        res.json(propuesta)
    }catch(error){
        console.error("Error al obtener propuesta",error);
        res.status(500).json({error:'Error interno del servidor'})
    }
    
}
const createPropuesta = async (req,res) =>{
    try {
        const {filtroAlquiler,monto} = req.body

        const newPropuesta = new Propuesta({
            filtroAlquiler,
            monto,
            user:req.userId
        })

        const propuestaSave = await newPropuesta.save()

        res.status(201).json(propuestaSave)


        
    } catch (error) {
        console.error('Error al crear propuesta:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
    
}

const getPropuestaById = async (req,res) =>{
    
}

const updatePropuesta = async (req,res) =>{
    
}

const deletePropuesta = async (req,res) =>{
    
}

module.exports = {
    getPropuesta,
    createPropuesta,
    getPropuestaById,
    updatePropuesta,
    deletePropuesta
}
