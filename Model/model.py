import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import warnings
from sklearn.multioutput import MultiOutputRegressor
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error,r2_score
import pickle
warnings.filterwarnings('ignore')


df=pd.read_csv('diet_recommendation_dataset1.csv')
df=pd.get_dummies(df,columns=['current_body_type'],dtype=int)
df=pd.get_dummies(df,columns=['goal_body_type'],dtype=int)
df=pd.get_dummies(df,columns=['activity_level'],dtype=int)
X=df.drop(['recommended_calories','recommended_protein','recommended_fat','recommended_carbs'],axis=1)
y=df[['recommended_calories','recommended_protein','recommended_fat','recommended_carbs']]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=42)
model = MultiOutputRegressor(LinearRegression())
model.fit(X_train, y_train)

with open ('model.pkl','wb') as f:
    pickle.dump(model,f)
