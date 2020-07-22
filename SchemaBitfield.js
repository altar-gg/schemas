const mongoose = require("mongoose");
const Bitfield = require("bitfield");

class SchemaBitfield extends mongoose.SchemaType {
    constructor(key, options) {
        super(key, options, 'Bitfield');
        this.flags = options.flags;
    }
  
    cast(from) {
      return new Bitfield(from, this.flags);
    }
}

mongoose.Schema.Types.Bitfield = SchemaBitfield;
module.exports = SchemaBitfield;