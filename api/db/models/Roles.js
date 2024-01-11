const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    role_name: { type: String, required: true }, // bu şekilde de yazılabilir
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

class Roles extends mongoose.model {}

schema.loadClass(Roles);

module.exports = mongoose.model("roles", schema);
