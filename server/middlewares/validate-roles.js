const hasRole = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(500).json({
        msg: 'Se intenta verificar un rol sin antes validar el token',
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(401).json({
        msg: `No posee los permisos necesarios para el servicio`,
      });
    }

    next();
  };
};

module.exports = {
  hasRole,
};
