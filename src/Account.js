const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const uuid = require("uuid");

const {Schema} = mongoose;

const scheme = new Schema({

	_id: {
		type: String,
		default: uuid.v4,
		required: true,
		hidden: true,
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
		visibility: ["personal"],
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
		minlength: 8
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
		transform: function (document, output, options) {

			Object.keys(document.schema.paths).forEach(key => {
				let path = document.schema.paths[key];
                
				if (path.options["hidden"]) delete output[key];
				if (path.options["visibility"]) {
					if (!path.options["visibility"].includes(options.visibility)) {
						delete output[key];
					}
				}
			});

			delete output.email_unique;
			delete output.__t;

			return output;
		}
	}
});

scheme.pre("save", async function (next) {
	if (this.isModified("password")) {
		this.password = await bcrypt.hash(this.password, );
	}

	next();
});

scheme.virtual("avatar").get(function () {
	return "https://cdn.altar.gg/avatars/" + this.id;
});

module.exports = mongoose.model("account", scheme);