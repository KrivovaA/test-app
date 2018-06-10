import { DO_SOMETHING } from '../actions/mainActions'

const initialState = {
  something: ''
};

const main = (state = initialState, action) => {
  switch (action.type) {
    case DO_SOMETHING:
      return { ...state, something: action.something };
    default:
      return state;
  }
};

export default main;