const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    is_active: Boolean,
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    versionKey: false, // buna ihtiyacımız yok
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

class Categories extends mongoose.model {}

schema.loadClass(Categories);

module.exports = mongoose.model("categories", schema);
