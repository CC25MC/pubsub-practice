const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares');

const { login } = require('../controllers/auth');

const router = Router();

router.post('/login', [
  check('email', 'El correo es obligatorio').not().isEmpty(),
  check('email', 'El correo no es válido').isEmail(),
  check('password', 'La constraseña es obligatoria').not().isEmpty(),
  validateFields,
], login);

module.exports = router;