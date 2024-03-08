import { App } from "@/components/App";
import { About } from "@/pages/about";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path:'/',
    element: <App />,
    children : [
      {
        path:'admin/shop',
        element: <Suspense fallback={'loading...'}><About /></Suspense>
      }
    ]
  }
]

export const router = createBrowserRouter(routes);

export default routes;