const { Tutor } = require('../db');

const getTutors = async (req, res) => {
  try {
       
    const tutors = await Tutor.findAll();

    return res.status(200).json(tutors);

  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {getTutors};