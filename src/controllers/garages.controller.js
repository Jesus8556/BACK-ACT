const { Garage } = require("../models/garage")



const createGarage = async (req, res) => {
    try {
  
        const { address, description, isAvailable, pricePerHour, image} = req.body
        const imagenUrl = req.file ? req.file.path.replace(/\\/g, '/') : null;

        const newGarage = new Garage({ address, description, isAvailable, pricePerHour, user: req.userId ,image:imagenUrl})
        const garageSave = await newGarage.save()

        res.status(201).json(garageSave)

    } catch (error) {

        console.error('Error al crear garage:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }


}

//TODOS LOS GARAGES
 const getAllGarage = async (req,res) =>{
    try {
        const garage = await Garage.find()
        res.json(garage)
    } catch (error) {
        console.error('Error al obtener todos los garages:', error);
        res.status(500).json({ error: 'Error interno del servidor' });        
    }
 }



//GARAGE POR ID DE USUARIO FILTRADO
const getGarage = async (req, res) => {
    try {
        const garage = await Garage.find({ user: req.userId })
        console.log(req.userId)
        res.json(garage)


    } catch (error) {
        console.error('Error al obtener garages:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }

}


const getGarageById = async (req, res) => {
    try {
        const garage = await Garage.findById(req.params.garageId)
        if (!garage) {
            return res.status(404).json({ error: 'Garage no encontrado' });
        }
        res.status(200).json(garage)

    } catch (error) {
        console.error('Error al actualizar garage:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }

}


const updateGarage = async (req, res) => {
    const updateGarage = await Garage.findByIdAndUpdate(req.params.garageId, req.body, {
        new: true
    })
    res.status(200).json(updateGarage)
}


const deleteGarage = async (req, res) => {
    try {
        const { garageId } = req.params
        const garage = await Garage.findByIdAndDelete(garageId)
        if (!garage) {
            return res.status(404).json({ error: 'Garage no encontrado' });
        }
        res.status(200).json({ message: "Eliminado correctamente" })

    } catch (error) {
        console.error('Error al eliminar garage:', error);
        res.status(500).json({ error: 'Error interno del servidor' });

    }

}
module.exports = {
    createGarage,
    getGarage,
    getGarageById,
    updateGarage,
    deleteGarage,
    getAllGarage
}