import {MEALS} from '../../data/dummyData';
import {TOFFLE_FAVORITE} from '../actions/meals';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOFFLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        meal => meal.id === action.mealId,
      );
      if (existingIndex !== -1) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return {...state, favoriteMeals: updatedFavMeals};
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId);
        return {...state, favoriteMeals: state.favoriteMeals.concat(meal)};
      }
    default:
      return state;
  }
  return state;
};

export default mealsReducer;
