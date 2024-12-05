const Car = require("../model/Car");

const getCars = (req, res) => {
  Car.find((err, cars) => {
    if (err) {
      res.send(err);
    }
    res.json(cars);
  });
};

const createCar = (req, res) => { console.log(req.body);
  const car = new Car({
    name: req.body.name,
    model: req.body.model,
    country: req.body.country,
  });

  car.save((err, car) => { 
    if (err) { console.log(err);
      res.send(err);
    }
    res.json(car);
  });
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
  getCars,
  createCar,
};
