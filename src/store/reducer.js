import {
  INPUT_CREATED,
  INPUT_DELETE,
  INPUT_UPDATE_TRIGGER,
  INPUT_UPDATE,
  INPUT_INITIAL,
} from "./type";
import uniqid from "uniqid";
const initialState = {
  initialForm: {
    name: "",
    email: "",
    password: "",
    lastName: "",
  },
  desc: [],
  isUpdate: false,
};

export const reducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case INPUT_CREATED:
      return {
        ...state,
        desc: [...state.desc, { id: uniqid(), ...action.payload }],
      };
    case INPUT_DELETE:
      return {
        ...state,
        desc: [...state.desc.filter(res => res.id !== action.payload)],
      };

    case INPUT_UPDATE_TRIGGER:
      console.log(action.payload);
      return {
        ...state,
        isUpdate: true,
        initialForm: {
          ...state.desc.filter(item => item.id === action.payload)[0],
        },
      };

    case INPUT_UPDATE:
      return {
        ...state,
        isUpdate: false,
        desc: [
          ...state.desc.map(item =>
            item.id === action.payload.id ? action.payload : item
          ),
        ],
      };

    case INPUT_INITIAL:
      return {
        ...state,
        initialForm: {
          name: "",
          lastName: "",
          password: "",
          email: "",
        },
      };
    default:
      return state;
  }
};
