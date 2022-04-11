const mongoose = require('mongoose')
const { Schema, model } = mongoose
const plantSchema = new mongoose.Schema(
	{
		img: {
			type: String,
			required: true,
		},
		height: {
			type: Number,
			required: true,
		},
		flowers: {
            type: Boolean,
            required: true
        },
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: false,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Plant', plantSchema)
