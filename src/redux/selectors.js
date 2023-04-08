const getIfLoggedIn = state => state.user.loggedIn;
const getUser = state => state.user.user;
const getUserId = state => state.user.user._id;
const getUserNotRecommendedFood = state => state.user.user.notRecommended;
const getUserDailyLimit = state => state.user.user.dailyLimit;
const getPublicUser = state => state.user.publicUser;

const getLoadingFood = state => state.food.loading;
const getFoodFilter = state => state.food.foodFilter;
const getFood = state => state.food.food;

const getMealsId = state => state.meals.meals._id;
const getMealsDate = state => state.meals.meals.onDay;
const getFoodMeals = state => state.meals.meals.food;
const getLoadingMeals = state => state.meals.loading;
const getDate = state => state.meals.setDate;

const mealsSelectors = {
  getMealsId,
  getFoodMeals,
  getLoadingMeals,
  getDate,
  getMealsDate,
};

const foodSelectors = {
  getLoadingFood,
  getFoodFilter,
  getFood,
};

const userSelectors = {
  getIfLoggedIn,
  getUser,
  getUserId,
  getUserNotRecommendedFood,
  getPublicUser,
  getUserDailyLimit,
};

export { userSelectors, foodSelectors, mealsSelectors };
