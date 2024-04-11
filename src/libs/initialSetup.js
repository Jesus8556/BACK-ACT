const mongoose = require('mongoose');
const { Rol } = require("../models/rol");

const createRoles = async () => {
    try {
        const count = await Rol.estimatedDocumentCount()

        if (count > 0) return;

        await Promise.all([
            new Rol({ name: 'user' }).save(),
            new Rol({ name: 'admin' }).save()
        ])

    } catch (error) {
        console.error(error);

    }
}

module.exports = createRoles
