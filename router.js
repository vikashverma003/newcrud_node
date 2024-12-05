const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("./controllers/Todo");

const {
  getCars,
  createCar,
} = require("./controllers/Car");

const {
  getUsers,
  createUser,
  login,
  followUnfollow,
} = require("./controllers/User");

const {
  likePost,
  getPosts,
  createPost,
  updatePost,
  deletePost,
  
} = require("./controllers/Post");

const { getNotes, createNote, updateNotes, deleteNotes } = require("./controllers/Note");
const auth = require("./middlewares/auth");
const { getRights, createRight, singleRight, updateRight } = require("./controllers/Right");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

router.get("/todos", getTodos);
router.post("/todos", createTodo);
router.put("/todos/:todoID", updateTodo);
router.delete("/todos/:todoID", deleteTodo);

/* Car routes  */

router.get("/cars", getCars);
router.post("/cars", createCar);
//router.put("/todos/:todoID", updateTodo);
//router.delete("/todos/:todoID", deleteTodo);


/* For user  */


router.get("/users", getUsers);
router.post("/users", createUser);
router.post("/login", login);
router.post("/followUnfollow", followUnfollow);



/* For Posts  */


router.get("/posts", getPosts);
router.post("/posts", createPost);
router.post("/updatePost", updatePost);
router.post("/deletePost", deletePost);
router.post("/likePost", likePost);


router.get("/notes", auth ,getNotes);
router.post("/notes",  auth, createNote);
//router.post("/updatePost", updateNotes);
//router.post("/deletePost", deleteNotes);
router.put("/notes/:id", auth, updateNotes);
router.delete("/notes/:id",  deleteNotes);


// Right


router.get("/rights", getRights);
router.post("/rights", createRight);
router.post("/singleRight", singleRight);
router.post("/updateRight", updateRight);
router.get("/getRights", getRights);




module.exports = router;
