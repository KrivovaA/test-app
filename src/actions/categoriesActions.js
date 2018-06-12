export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const SAVE_DATA_IMAGE = 'SAVE_DATA_IMAGE';

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES
});

export const saveCategories = categories => ({
  type: SAVE_CATEGORIES,
  categories
});

export const saveDataImage = (data, dataName) => ({
  type: SAVE_DATA_IMAGE,
  data,
  dataName
});

