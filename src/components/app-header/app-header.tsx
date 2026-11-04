import { getUserName } from '../../services/slices/userSlice';
import { AppHeaderUI } from '../ui';
import { useSelector } from '../../services/store';

export const AppHeader = (): React.JSX.Element => {
  const userName = useSelector(getUserName);

  return (
  <AppHeaderUI
    userName={userName}
    />);
};
