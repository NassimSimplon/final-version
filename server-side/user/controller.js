const USER = require("./model");
const bcrypt = require("bcrypt");

module.exports = {
  //add_User
  
  addUser: async (req, res) => {
    
    const fullName = req.body.fullName;
    const email = req.body.email;
    //encryption password
    const salt = await new bcrypt.genSalt(10);
    const hashedPasswor = await new bcrypt.hash(req.body.password, salt);
    const password = hashedPasswor;
    const cours = req.body.cours
    try {
      const User = new USER({
        fullName,
        email,
        password,
        cours
      });
      await User.save();
      res.json(User);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getAllUsers

  getAllUsers: async (req, res) => {
    try {
      const User = await USER.find();
      res.json(User);
    } catch (error) {
      console.error(error.message);
    }
  },

  //deleteUser

  deleteUser: async (req, res) => {
    try {
      const User = await USER.findByIdAndDelete(req.params.id);
      res.json(User);
    } catch (error) {
      console.error(error.message);
    }
  },

  //updateUser

  updateUser: async (req, res) => {
    try {
      const User = await USER.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
   await   res.json(User);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getUser

  getUser: async (req, res) => {
    try {
      const User = await USER.findById(req.params.id);
      res.json(User);
    } catch (error) {
      console.error(error.message);
    }
  },
};