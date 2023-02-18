import styled from 'styled-components';

export const ContainerHeader = styled.div`
  width: 100%;

  padding-left: 20px;
  padding-right: 20px;

  outline: 1px solid red;
  @media screen and (min-width: 320px) {
    max-width: 480px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;
