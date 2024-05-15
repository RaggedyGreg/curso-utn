// eslint-disable-file no-use-before-define
import styled from "styled-components";
import { AppBar } from "@mui/material";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";

export const NavBar = styled(AppBar)`
  background: #383838 !important;
`;

export const Navigation = styled(NavLink)`
  color: #838383;
  padding: 5px;
  font-size: 16px !important;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold !important;
`;
