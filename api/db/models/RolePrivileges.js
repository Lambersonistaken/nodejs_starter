const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    role_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "roles",
      required: true,
    },
    permission: String,
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

class RolePrivileges extends mongoose.model {}

schema.loadClass(RolePrivileges);

module.exports = mongoose.model("role_privileges", schema);
