import axios from "axios";

export const POST_STUDENT = "POST_STUDENT";

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
  