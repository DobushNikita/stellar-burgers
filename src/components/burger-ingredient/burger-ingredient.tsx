import { memo } from 'react';
import { useLocation } from 'react-router-dom';

import { addBun, addIngredient } from '../../services/slices/constructorSlice';
import { useDispatch } from '../../services/store';
import { BurgerIngredientUI } from '../ui';

import type { TBurgerIngredientProps } from './type';

export const BurgerIngredient = memo(function BurgerIngredient({
  ingredient,
  count,
}: TBurgerIngredientProps): React.JSX.Element {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleAdd = (): void => {
    // TODO: Добавить ингредиент в конструктор
    if (ingredient.type === 'bun') {
      dispatch(addBun(ingredient));
    } else {
      dispatch(addIngredient(ingredient));
    }
  };

  return (
    <BurgerIngredientUI
      ingredient={ingredient}
      count={count}
      locationState={{ background: location }}
      handleAdd={handleAdd}
    />
  );
});
