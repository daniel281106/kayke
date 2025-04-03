const User = require('../poo/user.js');

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await User.create(name, email);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar usuários' });
  }
};
