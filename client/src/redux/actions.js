import axios from "axios";

export const POST_STUDENT = "POST_STUDENT";
export const GET_TUTORS = "GET_TUTORS";

export const addStudent = (student) => {
    return async (dispatch) => {
      try {
        const response = await axios.post("/addStudent", student);
        const newStudent = response.data;
        dispatch({
          type: POST_STUDENT,
          payload: newStudent,
        });
      } catch (error) {
        console.log(error.response);
      }
    };
  };
  export const getTutors = () => {
    return async (dispatch) => {
      try {
        const response = await axios("/tutors");
        const tutorsComplete = response.data;
        const tutors = tutorsComplete.map(tutor => ({
            ...tutor,
            fullName: `${tutor.name} ${tutor.lastname}`
        }));
        dispatch({
          type: GET_TUTORS,
          payload: tutors,
        });
      } catch (error) {
        console.log(error.response);
      }
    };
  };
 