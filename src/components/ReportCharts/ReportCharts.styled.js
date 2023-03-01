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
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  margin-bottom: 20px;

  @media screen and (min-width: 320px) {
    max-width: 480px;
  }
  @media screen and (min-width: 768px) {
    max-width: 704px;
    margin-bottom: 80px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1034px;
  }
`;

export const P = styled.p`
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  letter-spacing: 0.02em;
  color: ${props => (props.type === 'expenses' ? 'red' : 'green')};
`;

export const PM = styled.p`
  font-family: Roboto;
  font-weight: 400;
  font-size: 10px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  letter-spacing: 0.02em;
  color: ${props => (props.type === 'expenses' ? 'red' : 'green')};
`;
