const { Student, Tutor } = require('../db');

const getStudents = async (req, res) => {
  try {
       
    const students = await Student.findAll({
      include: [
        {
          model: Tutor,
          attributes: ['name', 'lastname', 'phoneNumber', 'relation'],
          through: { attributes: [] },
        },
      ],
    });

    return res.status(200).json(students);

  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {getStudents};