const mongoose = require("mongoose");
const ActualBitfield = require("bitfield");

class Bitfield extends mongoose.SchemaType {
    constructor(key, options) {
        super(key, options, 'Bitfield');
        this.flags = options.flags;
    }
  
    cast(from) {
      return new ActualBitfield(from, this.flags);
    }
}

mongoose.Schema.Types.Bitfield = Bitfield;
module.exports = Bitfield;