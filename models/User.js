const mongoose = require('mongoose');

const _document_name = "User";

let UserSchema = mongoose.Schema({
    name : {
		type : String,
		required : true
    },
	email : {
		type : String,
		required : true,
	},
	phone : {
		type : String,
		required : true,
	},
	created_at: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model(_document_name, UserSchema);


