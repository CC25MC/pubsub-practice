const { User } = require('../models');

const { checkPassword } = require('../helpers');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        msg: 'Correo / Contraseña no son correctos - no registrado',
      });
    }

    if (!user.status) {
      return res.status(400).json({
        msg: 'Correo / Contraseña no son correctos - suspendido',
      });
    }

    if (!checkPassword(password, user.password)) {
      return res.status(400).json({
        msg: 'Correo / Contraseña no son correctos - contraseña',
      });
    }

    // const token = await generateToken(user.id);
    res.json({ user });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Hable con el administrador',
    });
  }
};

module.exports = {
  login,
};
