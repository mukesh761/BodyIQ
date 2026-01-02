const foods = [
  { name: "Roti", calories: 120, protein: 4, carbs: 20, fat: 3, category: "veg" },
  { name: "Brown Rice", calories: 216, protein: 5, carbs: 45, fat: 2, category: "veg" },
  { name: "White Rice", calories: 205, protein: 4, carbs: 44, fat: 1, category: "veg" },
  { name: "Dal (Lentils)", calories: 180, protein: 9, carbs: 24, fat: 5, category: "veg" },
  { name: "Chickpeas", calories: 269, protein: 15, carbs: 45, fat: 4, category: "veg" },
  { name: "Rajma", calories: 225, protein: 15, carbs: 40, fat: 1, category: "veg" },
  { name: "Paneer", calories: 260, protein: 18, carbs: 6, fat: 20, category: "veg" },
  { name: "Tofu", calories: 144, protein: 16, carbs: 4, fat: 9, category: "veg" },
  { name: "Curd", calories: 98, protein: 11, carbs: 4, fat: 4, category: "veg" },
  { name: "Greek Yogurt", calories: 120, protein: 18, carbs: 6, fat: 4, category: "veg" },

  { name: "Boiled Egg", calories: 78, protein: 6, carbs: 1, fat: 5, category: "non-veg" },
  { name: "Omelette", calories: 154, protein: 11, carbs: 1, fat: 11, category: "non-veg" },
  { name: "Grilled Chicken Breast", calories: 220, protein: 27, carbs: 0, fat: 5, category: "non-veg" },
  { name: "Chicken Curry", calories: 250, protein: 20, carbs: 8, fat: 15, category: "non-veg" },
  { name: "Fish Curry", calories: 240, protein: 22, carbs: 5, fat: 12, category: "non-veg" },
  { name: "Grilled Fish", calories: 200, protein: 26, carbs: 0, fat: 6, category: "non-veg" },

  { name: "Apple", calories: 95, protein: 0, carbs: 25, fat: 0, category: "fruit" },
  { name: "Banana", calories: 105, protein: 1, carbs: 27, fat: 0, category: "fruit" },
  { name: "Orange", calories: 62, protein: 1, carbs: 15, fat: 0, category: "fruit" },
  { name: "Mango", calories: 135, protein: 1, carbs: 35, fat: 1, category: "fruit" },
  { name: "Papaya", calories: 62, protein: 1, carbs: 16, fat: 0, category: "fruit" },

  { name: "Almonds", calories: 164, protein: 6, carbs: 6, fat: 14, category: "nuts" },
  { name: "Peanuts", calories: 161, protein: 7, carbs: 6, fat: 14, category: "nuts" },
  { name: "Cashews", calories: 155, protein: 5, carbs: 9, fat: 12, category: "nuts" },
  { name: "Walnuts", calories: 185, protein: 4, carbs: 4, fat: 18, category: "nuts" },
  { name: "Chia Seeds", calories: 138, protein: 5, carbs: 12, fat: 9, category: "seeds" },

  { name: "Oats", calories: 150, protein: 5, carbs: 27, fat: 3, category: "grains" },
  { name: "Quinoa", calories: 222, protein: 8, carbs: 39, fat: 4, category: "grains" },
  { name: "Corn", calories: 132, protein: 5, carbs: 29, fat: 2, category: "grains" },

  { name: "Milk (Low Fat)", calories: 102, protein: 8, carbs: 12, fat: 2, category: "dairy" },
  { name: "Cheese", calories: 113, protein: 7, carbs: 1, fat: 9, category: "dairy" },

  { name: "Sweet Potato", calories: 112, protein: 2, carbs: 26, fat: 0, category: "veg" },
  { name: "Potato", calories: 161, protein: 4, carbs: 37, fat: 0, category: "veg" },
  { name: "Carrot", calories: 41, protein: 1, carbs: 10, fat: 0, category: "veg" },
  { name: "Broccoli", calories: 55, protein: 4, carbs: 11, fat: 0, category: "veg" },
  { name: "Spinach", calories: 23, protein: 3, carbs: 4, fat: 0, category: "veg" },

  { name: "Vegetable Salad", calories: 90, protein: 3, carbs: 12, fat: 4, category: "veg" },
  { name: "Fruit Salad", calories: 120, protein: 2, carbs: 30, fat: 1, category: "fruit" },

  { name: "Idli", calories: 58, protein: 2, carbs: 12, fat: 0, category: "veg" },
  { name: "Dosa", calories: 168, protein: 4, carbs: 28, fat: 5, category: "veg" },
  { name: "Upma", calories: 192, protein: 5, carbs: 30, fat: 6, category: "veg" },
  { name: "Poha", calories: 180, protein: 4, carbs: 32, fat: 5, category: "veg" },

  { name: "Peanut Butter", calories: 190, protein: 7, carbs: 8, fat: 16, category: "spread" }
];

export default foods
