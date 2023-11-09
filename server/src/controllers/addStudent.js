const { Student, Tutor } = require("../db");

const addStudent = async (req, res) => {
    
  try {
    const {
      name,
      lastName,
      birthdate,
      schoolGrade,
      comments,
      picture,
      vip,
      TutorName,
      TutorLastName,
      telephone,
      relation,
    } = req.body;

    const studentExists = await Student.findOne({
      where: { name, lastName, birthdate },
    });

    const tutorExists = await Tutor.findOne({
      where: {
        name: TutorName,
        lastname: TutorLastName,
        phoneNumber: telephone,
      },
    });

    if (!studentExists) {
      const student = await Student.create({
        name,
        lastName,
        birthdate,
        schoolGrade,
        comments,
        picture,
        vip,
        active: true,
      });
     
      if (!tutorExists) {
        const tutor = await Tutor.create({
          name: TutorName,
          lastname: TutorLastName,
          phoneNumber: telephone,
          relation: relation,
        });
        await student.addTutor(tutor.id);
      }else{
        //res.status(201).json(`Tutor ${tutorExists.name} ya existe en la BD`);
        await student.addTutor(tutorExists.id);
      }
      
      res.status(200).json(`Alumno ${student.name} ha sido guardado en BD`);
    } else {
      res.status(201).json(`Este estudiante ya existe en la BD`);
    }
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = { addStudent };
