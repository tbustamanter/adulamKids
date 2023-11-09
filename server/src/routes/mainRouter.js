const { Router } = require("express");
const { addStudent } = require("../controllers/addStudent");
const { getStudents } = require("../controllers/getStudents");
const { getTutors } = require("../controllers/getTutors");

const mainRouter = Router();

mainRouter.get("/students", getStudents);
mainRouter.get("/tutors", getTutors);
mainRouter.post("/addStudent", addStudent);

mainRouter.get("/today", (req, res) => {
  res.status(200).send("Llegé al endpoint today");
});

module.exports = mainRouter;
