const mongoose = require("mongoose");

const Category = new mongoose.Schema({
	username:{
		type: String,
		required: true,
		
	},
	
},
{timestamps: true}
)

module.exports = mongoose.model("User",UserSchema)