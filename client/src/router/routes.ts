import AuthPage from "../pages/AuthPage";
import MainPage from "../pages/MainPage";
import RegPage from "../pages/RegPage";
import { AUTH_PAGE, MAIN_PAGE, REG_PAGE } from "./consts";

interface IRoutes {
  path: string;
  element: Function;
}

export const publicRoutes: IRoutes[] = [
  {
    path: AUTH_PAGE,
    element: AuthPage,
  },
];

export const publicRoutesWithoutContainer: IRoutes[] = [
  {
    path: REG_PAGE,
    element: RegPage,
  },
];

export const privateRoutes: IRoutes[] = [
  {
    path: MAIN_PAGE,
    element: MainPage,
  },
];
