from fastapi import FastAPI
from typing import Union
from pydantic import BaseModel
import run_mcdel
import numpy as np

app=FastAPI()


class Item(BaseModel):
    age:int
    height:int
    weight:float
    sleep_hour:float
    exercise_frequency:int
    daily_steps:int
    alcohol_consumption:int
    smoking:int
    calorie_intake:int
    protein_intake:float
    fat_intake:float
    BMI:float
    current_body_type_normal:int
    current_body_type_overweight:int
    current_body_type_skinny:int
    goal_body_type_fat_loss:int
    goal_body_type_muscle_gain:int
    goal_body_type_recomposition:int
    activity_level_active:int
    activity_level_light:int
    activity_level_moderate:int
    activity_level_sedentary:int



@app.post('/predict')
def prediction(data:Item):
    X = np.fromiter(data.model_dump().values(), dtype=float).reshape(1, -1)
    print(X[0])
    result=run_mcdel.prediction(X[0])
    return result