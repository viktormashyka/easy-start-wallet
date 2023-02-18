import styled from 'styled-components';

export const ModalWrap = styled.div`
  position: relative;
  width: 280px;
  height: 163px;
  @media screen and (min-width: 1280px) {
    width: 288px;
  }
`;

export const Square = styled.div`
  position: absolute;
  left: 70px;
  width: 20px;
  height: 20px;
  background-color: #172b5a;
  transform: rotate(45deg);
`;

export const ModalComment = styled.div`
  position: absolute;
  top: 10px;
  box-sizing: border-box;
  /* width: 280px; */
  width: 100%;
  height: 155px;
  padding: 40px 24.82px 32px;
  border-radius: 36px;
  background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);
  @media screen and (min-width: 1280px) {
    padding: 40px 29.59px 32px;
  }
`;

export const ModalTextMain = styled.p`
  margin-top: 0;
  margin-bottom: 20px;
  font-weight: normal;
  font-size: 14px;

  line-height: 20px;
  color: #ffffff;
`;

export const ModalTextSecond = styled.p`
  font-weight: normal;
  font-size: 12px;

  line-height: 16px;
  color: #ffffff;
`;
