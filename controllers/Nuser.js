const Nuser = require("../model/Nuser");
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const saltRounds = 10;
const SCRET_KEY = 'NODEJSAPI';

const getNusers = (req, res) => {
  Nuser.find((err, users) => {
    if (err) {
      res.send(err);
    }
    res.json(users);
  });
};



const createNuser = async(req,res)=> 
{
  const { name, email }= req.body;

  try {
      const isExist = await Nuser.findOne({ email: email});
      console.log(req.body);
      if(isExist) {
        res.status(400).json({message:"user already exist"});
      }

      const result = await User.create({
        email:email,
        name:name,
      });
      res.status(201).json({user:result});
    
  } catch (error) {
    console.log(error);
  }
}



module.exports = {
  getNusers,
    createNuser,
   
};
