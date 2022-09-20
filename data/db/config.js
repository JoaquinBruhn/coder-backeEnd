const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://joaco:admin1@coder-backend.jyd2rnt.mongodb.net/?retryWrites=true&w=majority");

module.exports = mongoose;
