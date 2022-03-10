const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.log(error);
    throw new Error('Conexión fallida a la base de datos');
  }
};

module.exports = {
  dbConnection,
};
