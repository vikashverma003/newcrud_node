const express = require("express");
const router = require("./router");  // For testing routes .
const mongoose = require("mongoose");
const cors = require("cors");

const dotenv = require("dotenv");

/* Testing routes for the seperating the routes */

const userrouter = require("./routes/test");
const nuserRouter = require("./routes/Nuser");
const npostRouter = require("./routes/Npost");
const ncommentRouter = require("./routes/Ncomment");

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

// for the calling the routes only for the testing purpose and population related routes

app.use('/test',userrouter);
app.use('/api',nuserRouter);
app.use('/api',npostRouter);
app.use('/api',ncommentRouter);

//console.log(process.env.MONGODB_URL);
/* mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
); */

mongoose.connect(
  process.env.MONGO_URL,
  (err) => {
   if(err) console.log(err) 
   else console.log("mongdb is connected");
  }
);



app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
