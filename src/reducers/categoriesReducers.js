import { SAVE_CATEGORIES, SAVE_DATA_IMAGE } from '../actions/categoriesActions'

const initialState = {
  categories: [],
  width: '640',
  height: '480',
  effect: 'without effects'
};

const main = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CATEGORIES: {
      return {...state, categories: action.categories};
    }
    case SAVE_DATA_IMAGE: {
      return {...state, [action.dataName]: action.data};
    }
    default:
      return state;
  }
};

export default main;