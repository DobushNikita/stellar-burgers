import { getUserName } from '../../services/slices/userSlice';
import { useSelector } from '../../services/store';
import { AppHeaderUI } from '../ui';

export const AppHeader = (): React.JSX.Element => {
  const userName = useSelector(getUserName);

  return <AppHeaderUI userName={userName} />;
};
