import { useEffect } from 'react';

import {
  fetchIngredients,
  getError,
  getIngredients,
  getIsloading,
} from '../services/slices/ingredientsSlice';
import { checkUserAuth } from '../services/slices/userSlice';
import { useSelector, useDispatch } from '../services/store';

import type { TIngredient } from '../utils/types';
import type { SerializedError } from '@reduxjs/toolkit';

type UseFetchIngredientsResult = {
  ingredients: TIngredient[];
  isIngredientsLoading: boolean;
  ingredientsError: SerializedError | null;
};

export const useFetchIngredients = (): UseFetchIngredientsResult => {
  const ingredients = useSelector(getIngredients);
  const isIngredientsLoading = useSelector(getIsloading);
  const ingredientsError = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
    dispatch(checkUserAuth());
  }, []);

  return { ingredients, isIngredientsLoading, ingredientsError };
};
