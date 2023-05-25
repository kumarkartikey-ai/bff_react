import { user } from "../constant"

const initialState = {
    data: "",
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case user.GET_USERS:
            return {
              ...state,
                data: action.payload,
            }
        default:
            return state
    }
}


export const AddUserReducer = (state = initialState, action) => {
    switch (action.type) {
      case user.ADD_USERS:
        // console.log(action.payload,action.type);
        return { ...state, data: action.payload };
  
      default:
        return { ...state };
    }
};
  

export const EditUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case user.EDIT_USERS:
      // console.log(action.payload,action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export const DeleteUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case user.DELETE_USERS:
      // console.log(action.payload,action.type);
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};