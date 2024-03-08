import { Link, Outlet } from "react-router-dom";
import {User} from '@packages/shared/src/components/User';

export const App = () => {


  return (
    <div data-testid='apps'>
      <h1>ADMIN MODULE</h1>
      <Outlet />
      <User username="LOL" />
    </div>
  )
};
