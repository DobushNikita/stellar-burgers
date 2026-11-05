import { combineReducers } from '@reduxjs/toolkit';

import { constructorReducer } from './slices/constructorSlice';
import { feedReducer } from './slices/feedSlice.ts';
import { ingredientsReducer } from './slices/ingredientsSlice';
import { newOrderReducer } from './slices/newOrderSlice.ts';
import { orderReducer } from './slices/orderSlice';
import { userReducer } from './slices/userSlice';

const rootReducer = combineReducers({
  feed: feedReducer,
  burgerConstructor: constructorReducer,
  user: userReducer,
  ingredients: ingredientsReducer,
  order: orderReducer,
  newOrder: newOrderReducer,
});

export default rootReducer;
