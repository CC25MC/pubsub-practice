const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  name: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    required: [true, 'El correo es obligatorio'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria'],
  },
  role: {
    type: String,
    default: 'USER_ROLE',
  },
  status: {
    type: Boolean,
    default: true,
  }
});

UserSchema.methods.toJSON = function() {
  const { __v, password, _id, ...data  } = this.toObject();
  data.uid = _id;
  return data;
}

module.exports = model('User', UserSchema);