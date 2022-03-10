const { User } = require('../models');

const { hashPassword } = require('../helpers');

const getUsers = async (req, res) => {
  const { offset = 0, limit = 5 } = req.query;
  const query = { status: true };

  const [total, users] = await Promise.all([
    User.countDocuments(query),
    User.find(query).skip(Number(offset)).limit(Number(limit)),
  ]);

  res.json({ total, users });
};

const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  const user = new User({ name, email, password, role });

  user.password = hashPassword(password);
  await user.save();

  res.status(201).json(user);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { _id, password, status, image, ...data } = req.body;
  const userEmail = await User.findOne({email: data.email});
  
  if (userEmail) {
    if (userEmail._id != id) {
      return res.status(400).json({
        msg: `El correo ${email}, ya se encuentra registrado`,
      });
    }
  }

  if (password) data.password = hashPassword(password);
  
  const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
  res.json(updatedUser);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const deletedUser = await User.findByIdAndUpdate(id, { status: false }, { new: true });
  res.json(deletedUser);
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
