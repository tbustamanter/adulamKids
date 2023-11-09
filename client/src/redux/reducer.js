import { POST_STUDENT } from "./actions";

const initialState = {
  students: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_STUDENT:
      return {
        ...state,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default rootReducer;
