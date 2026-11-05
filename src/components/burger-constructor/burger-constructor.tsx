import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getConstructorItems } from '../../services/slices/constructorSlice';
import {
  clearOrder,
  getOrderModalData,
  getOrderRequest,
  orderBurger,
} from '../../services/slices/newOrderSlice';
import { getUser } from '../../services/slices/userSlice';
import { useSelector, useDispatch } from '../../services/store';
import { BurgerConstructorUI } from '../ui';

import type {
  TConstructorIngredient,
  TConstructorIngredients,
  TOrder,
} from '../../utils/types';

export const BurgerConstructor = (): React.JSX.Element | null => {
  /** TODO: Взять переменные constructorItems, orderRequest и orderModalData из стора */
  const constructorItems: TConstructorIngredients = useSelector(getConstructorItems);
  const orderRequest = useSelector(getOrderRequest);
  const orderModalData: TOrder | null = useSelector(getOrderModalData);
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const onOrderClick = (): void => {
    if (!constructorItems.bun || orderRequest) return;
    // TODO: Оформить заказ
    if (!user) {
      navigate('/login', { state: { from: location } });
      return;
    }
    dispatch(orderBurger());
  };

  const closeOrderModal = (): void => {
    // TODO: Закрыть модальное окно и сбросить заказ
    dispatch(clearOrder());
  };

  const price = useMemo(
    () =>
      (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
      constructorItems.ingredients.reduce(
        (s: number, v: TConstructorIngredient) => s + v.price,
        0
      ),
    [constructorItems]
  );

  return (
    <BurgerConstructorUI
      price={price}
      orderRequest={orderRequest}
      constructorItems={constructorItems}
      orderModalData={orderModalData}
      onOrderClick={onOrderClick}
      closeOrderModal={closeOrderModal}
    />
  );
};
