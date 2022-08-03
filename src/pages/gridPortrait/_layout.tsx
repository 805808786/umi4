import { Outlet } from 'umi';
import NavBar from './components/NavBar';

export default () => (
  <>
    <NavBar />
    <Outlet />
  </>
);
