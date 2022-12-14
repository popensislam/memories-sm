import React from "react";
import { AUTH_PAGE, FRIENDS_PAGE, MAIN_PAGE, REG_PAGE, USERS_PAGE } from "./consts";
import AuthPage from "pages/AuthPage";
import RegPage from "pages/RegPage";
import MainPage from "pages/MainPage";
import FriendsPage from "pages/FriendsPage";
import UsersPage from "pages/UsersPage";

interface IRoutes {
  path: string;
  element: Function;
}

export const publicRoutes: IRoutes[] = [
  {
    path: AUTH_PAGE,
    element: AuthPage,
  },
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
  {
    path: FRIENDS_PAGE,
    element: FriendsPage
  },
  {
    path: USERS_PAGE,
    element: UsersPage
  }
];
