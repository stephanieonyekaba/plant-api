const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		height: {
			type: Number,
			required: true,
		},
		spikey: {
            type: Boolean,
            required: true
        },
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Plant', plantSchema)
