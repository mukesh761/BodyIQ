// utils/foodScoring.js
const calculateFoodScore = (food, remaining) => {
  const proteinScore = food.protein / remaining.protein;
  const calorieScore =
    1 - Math.abs(food.calories - remaining.calories) / remaining.calories;
  const fatScore = 1 - food.fat / remaining.fat;

  const score =
    0.5 * proteinScore +
    0.3 * calorieScore +
    0.2 * fatScore;

  return score;
};

export {calculateFoodScore}
