import { App } from "@/components/App";
import { Shop } from "@/pages/shop";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import {User} from '@packages/shared/src/components/User';

const routes = [
  {
    path:'/',
    element: <App />,
    children : [
      {
        path:'/shop/main',
        element: <Suspense fallback={'loading...'}><Shop /></Suspense>
      },
      // {
      //   path:'/shop/second',
      //   element: <Suspense fallback={'loading...'}><User username="huiBashka" /></Suspense>
      // }
    ]
  }
]

export const router = createBrowserRouter(routes);

export default routes;