const Ncomment = require("../model/Ncomment");

/*const getPosts = (req, res) => {
    Post.find((err, posts) => {
    if (err) {
      res.send(err);
    }
    res.json(posts);
  });
}; */


/* GetAll the posts  */

const getNcomment = async(req, res) => {
    try {
        const comment =  await Ncomment.find();
        res.status(200).json(comment);
      } catch (err) {
        res.status(500).json(err);
      }
}; 

/* Create post */



const createNcomment = async(req, res) => 
{ 
    try {
            const comment = new Ncomment({
                text: req.body.text,
            });
            const userComment = await comment.save();
            res.status(200).json(userComment);
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
