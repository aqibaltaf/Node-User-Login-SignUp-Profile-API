const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: new mongoose.Schema.Types.ObjectId,
    Name: String,
    Email: String,
    Password: String,
    Phone: Number,
    ERP: Number,
    Program: String,
    Institute: String
})

module.exports = mongoose.model('User', UserSchema);