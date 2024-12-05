const Post = require("../model/Post");

/*const getPosts = (req, res) => {
    Post.find((err, posts) => {
    if (err) {
      res.send(err);
    }
    res.json(posts);
  });
}; */


/* GetAll the posts  */

const getPosts = async(req, res) => {
    try {
        const post =  await Post.find();
        res.status(200).json(post);
      } catch (err) {
        res.status(500).json(err);
      }
}; 

/* Create post */

/* const createPost = (req, res) => { 
  const post = new Post({
    userId: req.body.user_id,
    desc: req.body.desc,
  });

  post.save((err, post) => { 
    if (err) { console.log(err);
      res.send(err);
    }
    res.json(post);
  });
}; */

const createPost = async(req, res) => 
{ 
    try {
            const post = new Post({
                userId: req.body.user_id,
                desc: req.body.desc,
            });
            const userPost = await post.save();
            res.status(200).json(userPost);
        } 
        catch (err) 
        {
        res.status(500).json(err);
        }
  }; 


//update a post

const updatePost = async(req, res) => {
    try {
        const post =  await Post.findById(req.body.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body });
          res.status(200).json("the post has been updated");
        } else {
          res.status(403).json("you can update only your post");
        }
      } catch (err) {
        res.status(500).json(err);
      }
};

// Like a post

const likePost = async(req, res) => {
  try {
      const post =  await Post.findById(req.body.id);
      if (!post.likes.includes(req.body.userId)) {
        await post.updateOne({ $push: { likes: req.body.userId } });
        res.status(200).json("The post has been liked");
      } else {
        await post.updateOne({ $pull: { likes: req.body.userId } });
        res.status(200).json("The post has been disliked");
      }

    } catch (err) {
      res.status(500).json(err);
    }
};



// Delete Post

const deletePost = async(req, res) => {
    try {
        const post =  await Post.findById(req.body.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne();
           res.status(200).json("the post has been deleted");
        } else {
          res.status(403).json("you can delete only your post");
        }
      } catch (err) {
        res.status(500).json(err);
      }
};



// router.put("/:id", async (req, res) => {
//     try {
//       const post = await Post.findById(req.params.id);
//       if (post.userId === req.body.userId) {
//         await post.updateOne({ $set: req.body });
//         res.status(200).json("the post has been updated");
//       } else {
//         res.status(403).json("you can update only your post");
//       }
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });



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
    getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost,
};
