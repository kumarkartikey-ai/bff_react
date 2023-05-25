import { student } from "../constant"

const initialState = {
    data: "",
}

export const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case student.GET_STUDENTS:
            return {
              ...state,
                data: action.payload,
            }
        default:
            return state
    }
}


export const AddStudentReducer = (state = initialState, action) => {
    switch (action.type) {
      case student.ADD_STUDENT:
        // console.log(action.payload,action.type);
        return { ...state, data: action.payload };
  
      default:
        return { ...state };
    }
};
  

export const EditStudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case student.EDIT_STUDENT:
      // console.log(action.payload,action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const DeleteStudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case student.DELETE_STUDENT:
      // console.log(action.payload,action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};