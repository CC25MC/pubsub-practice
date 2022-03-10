const jwt = require('jsonwebtoken');

const { User } = require('../models');

const validateToken = async (req, res, next) => {
  const token = req.header('X-token');

  if (!token) {
    return res.status(401).json({
      msg: 'No hay token en la petición',
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.PRIVATEKEY);
    const user = await User.findById(uid);

    if (!user) {
      return res.status(401).json({
        msg: 'Token no válido - usuario no existe en la base de datos',
      });
    }

    if (!user.status) {
      return res.status(401).json({
        msg: 'Token no válido - usuario eliminado',
      });
    }

    req.user = user;
    next();
    
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: 'Token no válido' });
  }
};

module.exports = {
  validateToken,
};
