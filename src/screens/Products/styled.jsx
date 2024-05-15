import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  background-color: #fff;
  grid-gap: 15px;
  @media (max-width: 800px) {
    grid-template: 1fr / 1fr;
  }
`;
