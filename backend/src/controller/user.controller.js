const userService = require('../services/user.service');

const getAll = async (_req, res) => {
    try { 
    const users = await userService.getAll();
    return res.status(200).json(users);
    }
    catch(e) {
        console.log(e.message)
        res.status(500).json({ message: 'Ocorreu um erro!' });
    };
}

const getById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await userService.getById(id);
  
      if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
  
      return res.status(200).json(user);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: error500Message });
    }
  };

  const createUser = async (req, res) => {
    try {
        const { full_name, email, contact } = req.body;
        const newUser = await userService.createUser(full_name, email, contact);
        return res.status(201).json(newUser);
    } catch(e){
        console.log(e.message)
        res.status(500).json({ message: error500Message });
    }
  };

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { full_name, email, contact } = req.body;

        const updateUser = await userService.updateUser(id, full_name, email, contact);
        
        if (!updateUser) return res.status(404).json({ message: 'Não foi possível atualizar os dados' })
        return res.status(200).json({ message: 'Atualizado com sucesso!' });
    } catch(e) {
        console.log(e.message);
        res.status(500).json({ message: error500Message })
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        await userService.deleteUser(id);

        return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
    } catch (e) {
        console.log(e.message)
        res.status(500).json({ message: error500Message });
    }
}

module.exports = {
    getAll,
    getById,
    createUser,
    updateUser,
    deleteUser,
}