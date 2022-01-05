import Search_Page from "../../modules/SearchPage/SearchPage";
import User_Page from "../../modules/UserPage/UserPage";
import { RoutesPath } from "../enums/RoutesPath";

export const routes = [
  {
    path: RoutesPath.SERCH_PAGE,
    Component: Search_Page,
    exact: true,
  },
  {
    path: RoutesPath.USER_PAGE,
    Component: User_Page,
    exact: true,
  },
];
