import AuthPage from "../pages/auth/AuthPage";
import MainPage from "../pages/main/MainPage";
import { AUTH_PAGE, MAIN_PAGE } from "./consts";

interface IPublicRoutes {
  path: string,
  element: Function,
}

export const publicRoutes: IPublicRoutes[] = [
  { 
    path: MAIN_PAGE,
    element: MainPage
  },
  {
    path: AUTH_PAGE,
    element: AuthPage
  }
]