const mongoose = require('mongoose');

async function startDB() {
    await mongoose.connect('mongodb+srv://safeway_pi:302010Senac@cluster0.4urdb.mongodb.net/test');
}

module.exports = startDB;