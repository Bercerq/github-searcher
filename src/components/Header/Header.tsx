import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/svg/Logo";

import "./style.scss";

export const Header: FC = ({ children }) => {
  return (
    <div className="search_container">
      <NavLink to="/">
        <Logo />
      </NavLink>
      {children}
    </div>
  );
};
