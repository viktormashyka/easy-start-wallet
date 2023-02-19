import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
`;
export const ModalWraper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 195px;
  max-width: 380px;
  width: 100%;
  padding: 12px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
`;
export const ButtonClose = styled.span`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ModalText = styled.div`
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  letter-spacing: 0.02em;
  color: #52555f;
`;
export const ButtonsContainer = styled.ul`
  margin-top: 20px;
  display: flex;
  margin-left: 15px;
`;

export const ButtonYes = styled.button`
  width: 125px;
  height: 44px;
  color: #ffffff;
  border-radius: 16px;
  background: #ff751d;
  font-family: Roboto;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  margin-right: 15px;
`;
export const ButtonNo = styled.button`
  width: 125px;
  height: 44px;
  color: #52555f;
  border: 2px solid #f5f6fb;
  border-radius: 16px;
  background: #ffffff;
  font-family: Roboto;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
`;
