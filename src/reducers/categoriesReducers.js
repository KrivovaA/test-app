import { SAVE_CATEGORIES } from '../actions/categoriesActions'

const initialState = {
  categories: []
};

const main = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CATEGORIES: {
      console.log(action.categories);
      return {...state, categories: action.categories};
    }
    default:
      return state;
  }
};

export default main;