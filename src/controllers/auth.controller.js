const User = require("../models/user")
const jwt = require("jsonwebtoken")
const config = require("../config")
const { Rol } = require("../models/rol")

const signUp = async (req, res) => {

    const { name, username, email, password, role } = req.body;

    try {
        const hashedPassword = await User.encriptar(password)

        const newUser = new User({
            name,
            username,
            email,
            password: hashedPassword
        })
        if (role) {
            const foundRole = await Rol.find({ name: { $in: role } })
            newUser.role = foundRole.map(role => role._id)

        } else {
            const defaultRole = await Rol.findOne({ name: "user" })
            newUser.role = [defaultRole._id];
        }

        const saveUser = await newUser.save();
        console.log(saveUser)

        const token = jwt.sign({ id: saveUser._id }, config.SECRET, { expiresIn: 86400 })

        res.status(200).json({ token })

    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}

const signIn = async (req, res) => {

    try {
        const userFound = await User.findOne({ email: req.body.email }).populate("role");
        if (!userFound) return res.status(400).json({ message: "Usuario no encontrado" })

        const matchPassword = await User.comparar(req.body.password, userFound.password)

        if (!matchPassword) return res.status(401).json({ token: null, message: "Contraseña invalida" })

        const token = jwt.sign({ id: userFound._id }, config.SECRET, { expiresIn: 86400 })

        console.log(userFound);
        res.json({ token })

    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log(error)
    }
}



module.exports = {
    signIn,
    signUp
}