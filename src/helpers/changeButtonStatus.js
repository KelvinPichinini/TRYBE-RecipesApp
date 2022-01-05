import { getIngredients } from './getIngredients';

const changeButtonStatus = (state, recipe) => {
  const ingredientsList = getIngredients(recipe);

  const checkeds = Object.values(state);
  const isAllChecked = checkeds.every((checkbox) => checkbox === true)
  && checkeds.length === ingredientsList.length;
  console.log(ingredientsList.length, checkeds.length, ingredientsList, recipe);
  return isAllChecked;
};

export default changeButtonStatus;
