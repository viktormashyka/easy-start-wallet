import styled from 'styled-components';

export const ContainerHeader = styled.div`
  width: 100%;

  padding-left: 20px;
  padding-right: 20px;

  margin: auto;
  @media screen and (min-width: 320px) {
    max-width: 480px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
