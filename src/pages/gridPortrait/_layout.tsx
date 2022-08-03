import * as format from '@/utils/format';
import { Outlet, useParams, useRequest } from 'umi';
import NavBar from './components/NavBar';
import * as services from './services';

export default () => {
  const { accountId } = useParams();
  const { data, loading } = useRequest(
    () => services.loginByZZD({ zhezhengdingId: accountId }),
    { ready: !!accountId },
  );
  console.log(format.getPageQuery());
  console.log(accountId);
  console.log(data);
  console.log(loading);

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
