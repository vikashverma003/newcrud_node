const Right = require("../model/Right");


const getRights = async(req, res) => {
    try {
        const right =  await Right.find().populate({path:'userId', select:['name', 'email']});
        res.status(200).json(right);
      } catch (err) {
        res.status(500).json(err);
      }
}; 

const singleRight = async(req, res) => {
    try {
        //const right =  await Right.find({_id:req.body.rightId}).populate('userId');
       /* const right =  await Right.find({_id:req.body.rightId})
                        .populate({path:'userId', 
                                    match:{name:'jack',email:'jack@gmail.com'}    
                        }); */
        
        const right =  await Right.find({_id:req.body.rightId})
                                            .populate({
                                                path:'userId', 
                                                select:['name', 'email'],
                                                match:{email:{$regex: '.*gmail*.'}}    
                                            });
        
        res.status(200).json(right);
      } catch (err) {
        res.status(500).json(err);
      }
}; 


// update the json array column

const updateRight = async(req, res) => {
    try {
        const right =  await Right.findById(req.body.rightId);
        await right.updateOne({ $push: { userId: req.body.userId } });  // pushing to the json arr column

        res.status(200).json(right);
      } catch (err) {
        res.status(500).json(err);
      }
}; 

/* Create post */


const createRight = async(req, res) => 
{ 
    try {
            const right = new Right({
                userId: req.body.userId,
                name: req.body.name,
            });
            const userRight = await right.save();
            res.status(200).json(userRight);
        } 
        catch (err) 
        {
        res.status(500).json(err);
        }
  }; 




module.exports = {
    getRights,
    createRight,
    singleRight,
    updateRight,
};
