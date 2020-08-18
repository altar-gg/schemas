const mongoose = require("mongoose");
const uuid = require("uuid");
const {Schema} = mongoose;

const Scheme = new Schema({

	_id: {
		type: String,
		default: uuid.v4,
		required: true,
		uuid: true
	},

	username: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 24,
		lowercase: true,
		alphanumeric: true,
		trim: true,
		index: true,
		unique: true
	},

	email: {
		type: String,
		required: true,
		email: true,
		index: true,
		unique: true
	},

	verified: {
		type: Boolean,
		default: false
	},

	disabled: {
		type: Date,
		get: (value) => {
			if (value && value <= Date.now()) return undefined;
		}
	},

	password: {
		type: String,
		required: true,
		hidden: true,
		minlength: 8,
		maxlength: 64,
	}

}, {
	timestamps: {
		createdAt: "created",
		updatedAt: "updated",

		currentTime: () => {
			return Date.now();
		}
	},

	toJSON: {
		getters: true,
		versionKey: false,
		transform: function (document, output) {

			Object.keys(document.schema.paths).forEach(key => {
				let path = document.schema.paths[key];
				if (path.options["hidden"]) delete output[key];
			});

			delete output.email_unique;
			delete output.__t;
			delete output._id;

			return output;
		}
	}
});

Scheme.virtual("avatar").get(function () {
	return "https://cdn.altar.gg/avatars/" + this.id;
});

mongoose.model("account", Scheme);
module.exports = Scheme;