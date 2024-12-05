const Npost = require("../model/Npost");

/*const getPosts = (req, res) => {
    Post.find((err, posts) => {
    if (err) {
      res.send(err);
    }
    res.json(posts);
  });
}; */


/* GetAll the posts  */

const getNposts = async(req, res) => {
    try {
        const post =  await Npost.find();
        res.status(200).json(post);
      } catch (err) {
        res.status(500).json(err);
      }
}; 

/* Create post */



const createNpost = async(req, res) => 
{ 
    try {
            const post = new Npost({
                title: req.body.title,
                content: req.body.content,
            });
            const userPost = await post.save();
            res.status(200).json(userPost);
        } 
        catch (err) 
        {
        res.status(500).json(err);
        }
  }; 




module.exports = {
    getNposts,
    createNpost,
};
