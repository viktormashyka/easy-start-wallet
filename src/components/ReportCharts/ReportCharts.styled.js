import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: auto;

  @media screen and (min-width: 320px) {
    max-width: 480px;
  }
  @media screen and (min-width: 768px) {
    max-width: 704px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1034px;
  }
`;

