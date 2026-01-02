import pickle
import pandas as pd

with open ('model.pkl', 'rb') as f:
    model=pickle.load(f)

columns=['age', 'height', 'weight', 'sleep_hours', 'exercise_frequency',
       'daily_steps', 'alcohol_consumption', 'smoking', 'calorie_intake',
       'protein_intake', 'fat_intake', 'BMI', 'current_body_type_normal',
       'current_body_type_overweight', 'current_body_type_skinny',
       'goal_body_type_fat_loss', 'goal_body_type_muscle_gain',
       'goal_body_type_recomposition', 'activity_level_active',
       'activity_level_light', 'activity_level_moderate',
       'activity_level_sedentary']

def prediction(data):
    # print(data)
    userData=pd.DataFrame([data],columns=columns)
    result=model.predict(userData)
    return {"result": result.tolist()}
