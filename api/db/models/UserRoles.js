const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    role_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "roles",
      required: true,
    },
    user_id: {
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

class UserRoles extends mongoose.model {}

schema.loadClass(UserRoles);

module.exports = mongoose.model("user_roles", schema);
