const User = require("../model/User");
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const saltRounds = 10;
const SCRET_KEY = 'NODEJSAPI';

const getUsers = (req, res) => {
  User.find((err, users) => {
    if (err) {
      res.send(err);
    }
    res.json(users);
  });
};


//  https://www.youtube.com/watch?v=sAmtUfxCo7w

//  Express JS Tutorial - 🔒 JWT Token Authentication - Login & Signup | CheezyCode


// check if the user exist, encrypt password, save data

const createUser = async(req,res)=> 
{
  const { name, email, password }= req.body;

  try {
      const isExist = await User.findOne({ email: email});
      console.log(req.body);
      if(isExist) {
        res.status(400).json({message:"user already exist"});
      }

      const hashedPassword = await bcrypt.hash(password,10);
      const result = await User.create({
        email:email,
        password:hashedPassword,
        username:name,
      });
      const token = jwt.sign({email:result.email, id:result._id},SCRET_KEY);
      res.status(201).json({user:result, token:token});
    
  } catch (error) {
    console.log(error);
  }
}


// Login api

const login = async(req,res)=> 
{
  const { email, password, username }= req.body;

  try {
      //const isExist = await User.findOne({ email: email});
            const isExist = await User.findOne({ username: username});

      console.log(req.body);
      if(!isExist) {
        res.status(400).json({message:"user does not exist"});
      }

      const comparePass = await bcrypt.compare(password, isExist.password);
      if(comparePass) {
        const token = jwt.sign({email:isExist.email, id:isExist._id},SCRET_KEY);
        res.status(200).json({user:isExist, token:token});
      }
      else {
        res.status(400).json({message: "Invalid credentials"});
      }

    
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "Something went wrong"});
  }
}




/* const createUser = (req, res) => { console.log(req.body);
  const user = new User({
    username: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  user.save((err, user) => { 
    if (err) { console.log(err);
      res.send(err);
    }
    res.json(user);
  });
}; */

// follow and unfollow

//update a post

const followUnfollow = async(req, res) => { console.log("followunfolowww");
  try {
      const currentUser =  await User.findById(req.body.follower_id);
      const followingId =  await User.findById(req.body.following_id);
      if (currentUser && followingId) { console.log("yessss");
          if(!currentUser.followings.includes(req.body.following_id)) {
            console.log("uppp");
           await currentUser.updateOne({$push:{followings:req.body.following_id}});
           await followingId.updateOne({$push:{followers:req.body.follower_id}});
           
          }
          else {  console.log("nooo");
            await currentUser.updateOne({$pull:{followings:req.body.following_id}});
            await followingId.updateOne({$pull:{followers:req.body.follower_id}});

          }
        //  await post.updateOne({ $set: req.body });
         res.status(200).json("Your following has been updated");
      
      } else {
        res.status(403).json("Something went wrong");
      }
    } catch (err) {
      res.status(500).json(err);
    }
};


/* const updateTodo = (req, res) => {
  Todo.findOneAndUpdate(
    { _id: req.params.todoID },
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
      },
    },
    { new: true },
    (err, Todo) => {
      if (err) {
        res.send(err);
      } else res.json(Todo);
    }
  );
};

const deleteTodo = (req, res) => {
  Todo.deleteOne({ _id: req.params.todoID })
    .then(() => res.json({ message: "Todo Deleted" }))
    .catch((err) => res.send(err));
}; */

module.exports = {
    getUsers,
    createUser,
    login,
    followUnfollow,
};
