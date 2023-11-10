import { POST_STUDENT, GET_TUTORS } from "./actions";

const initialState = {
  students: [],
  tutors: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_STUDENT:
      return {
        ...state,
      };
    case GET_TUTORS:{
        return {
        ...state,
        tutors: action.payload            
        }
    };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default rootReducer;
