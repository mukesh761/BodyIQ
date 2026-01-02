import { calculateFoodScore } from "../utils/foodScore.js";
import foods from '../FoodData/foodData.js'
export const foodSuggestion=(req,res)=>{
    const { remainingCalories, remainingProtein, remainingFat } = req.body;

  if (!remainingCalories || !remainingProtein || !remainingFat) {
    return res.status(400).json({ message: "Invalid input data" });
  }

  const remaining = {
    calories: remainingCalories,
    protein: remainingProtein,
    fat: remainingFat
  };

  // STEP 1: Filter foods
  const filteredFoods = foods.filter(food =>
    food.calories <= remaining.calories &&
    food.fat <= remaining.fat + 5
  );

  // STEP 2: Score foods
  const scoredFoods = filteredFoods.map(food => {
    const score = calculateFoodScore(food, remaining);
    return { ...food, score: Number(score.toFixed(2)) };
  });

  // STEP 3: Sort & return top 5
  const bestFoods = scoredFoods
    .filter(f => f.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  res.json(bestFoods);
}