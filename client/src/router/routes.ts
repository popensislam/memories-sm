import React from "react";
import { AUTH_PAGE, MAIN_PAGE, REG_PAGE } from "./consts";

interface IRoutes {
  path: string;
  element: Function;
}

export const publicRoutes: IRoutes[] = [
  {
    path: AUTH_PAGE,
    element: React.lazy(() => import("../pages/AuthPage")),
  },
];

export const publicRoutesWithoutContainer: IRoutes[] = [
  {
    path: REG_PAGE,
    element: React.lazy(() => import("../pages/RegPage")),
  },
];

export const privateRoutes: IRoutes[] = [
  {
    path: MAIN_PAGE,
    element: React.lazy(() => import("../pages/MainPage")),
  },
];
