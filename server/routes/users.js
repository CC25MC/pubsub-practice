const { Router } = require('express');
const { check } = require('express-validator');

const { emailExists, userExistsById, validRole } = require('../helpers');
const { hasRole, validateFields, validateToken } = require('../middlewares');

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/users');

const router = Router();

router.get('/', getUsers);

router.post('/', [
  check('password', 'La contraseña debe tener más de 6 caracteres').isLength({ min: 6 }),
  check('email', 'El correo no es válido').isEmail(),
  check('email').custom(emailExists),
  check('role').custom(validRole),
  validateFields,
], createUser);

router.put('/:id', [
  check('id', 'No es un ID válido').isMongoId(),
  check('id').custom(userExistsById),
  check('role').custom(validRole),
  validateFields
], updateUser);

router.delete('/:id', [
  validateToken,
  hasRole('ADMIN_ROLE'),
  check('id', 'No es un ID válido').isMongoId(),
  check('id').custom(userExistsById),
  validateFields,
], deleteUser);

module.exports = router;
