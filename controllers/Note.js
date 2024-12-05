const Note = require("../model/Note");

const createNote = async(req,res)=> 
{
    // console.log(req.body);
    const {title, description} = req.body;
    const noteData = new Note({
        title:title,
        description:description,
        userId : req.userId
    });

    try {
        const notes = await noteData.save();
        res.status(201).json({notes});

    } catch (error) {
        console.log(error);
        res.status(400).json({message: 'something went wrong'});
    }

}

const getNotes = async(req,res)=> {
    console.log(req.userId);
    try {
        const notes = await Note.find({userId:req.userId});
        res.status(201).json({data:notes});

    } catch (error) {
        console.log(error);
        res.status(400).json({message: 'something went wrong'});
    }

}

const updateNotes = async(req,res)=> {
    const {title,description} = req.body;
    const sid = req.params.id;
    const up = new Note({
        title:title,
        description:description,
        userId:req.userId
    });


    try {
        //const notes = await Note.findByIdAndUpdate(req.params.id,up, {new:true});
      //  const notes = await Note.findByIdAndUpdate({_id:sid},up, {new:true});
      await Note.updateOne({_id: req.params.id}, up);


        // console.log(req.params.id);
        // console.log(req.body);
        // console.log(notes);
        // const updatedNotes = await notes.updateOne({ $set:req.body });
        res.status(200).json({a:"asdasdas"});

       /* if(notes.userId == req.userId) {
           
        }
        else {
            res.status(400).json({message: 'User not found'});
        } */

    } catch (error) {
        console.log(error);
        res.status(400).json({message: 'something went wrong'});
    }


}

const deleteNotes = (req,res)=> {
    console.log(123123);
}

module.exports = {
    createNote,
    getNotes,
    updateNotes,
    deleteNotes
}