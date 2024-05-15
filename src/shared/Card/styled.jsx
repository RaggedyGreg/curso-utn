import styled from "styled-components";
import { Card, Typography, CardMedia } from "@mui/material";

export const CardComponent = styled(Card)`
  color: #fff !important;
  background: #383838 !important;
  width: 100% !important;
  max-width: 300px;
  height: 100% !important;
  max-height: 450px;
  outline: 1px solid rgb(56 56 56 / 10%) !important;
  margin: 5px;
  display: grid;
  grid-template: 1fr 1fr 70px / 1fr;
`;

export const Waiting = styled.div`
  font-size: 16px !important;
  color: ;
`;

export const MediaContainer = styled.div`
  width: 100%;
  display: inline-grid;
  align-content: center;
  justify-content: center;
  background-color: #fff;
  padding: 10px 0px;
`;

export const CardImage = styled(CardMedia)`
  width: fit-content;
`;
