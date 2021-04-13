export const TOFFLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavorite = id => ({
  type: TOFFLE_FAVORITE,
  mealId: id,
});
