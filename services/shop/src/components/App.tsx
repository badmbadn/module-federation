import { Link, Outlet } from "react-router-dom";


export const App = () => {


  return (
    <div data-testid='apps'>
      <h1>Pages</h1>
      <Link to={'/about'}>About</Link>
      <Link to={'/shop'}>Shop</Link>
      <Outlet />
    </div>
  )
};
