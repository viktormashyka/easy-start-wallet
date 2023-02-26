import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

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
  padding: 20px;
`;

export const ModalWraper = styled.div`
  @media screen and (max-width: 480px) {
    max-width: 320px;
  }
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 295px;
  max-width: 480px;
  width: 100%;
  padding: 22px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
`;

export const ModalForm = styled.form`
  /* outline: 1px solid red; */
  margin-top: 15px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ModalLabel = styled.label`
  width: 100%;
`;

export const ModalInput = styled.input`
  outline: 1px solid red;
  opacity: 0;
  visibility: hidden;
  position: absolute;
`;

export const AvatarSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border: 2px solid #f5f6fb;
  border-radius: 16px;
  border-radius: 20px;
  padding: 10px;
`;

export const MadalButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border: 2px solid #f5f6fb;
  background-color: ${props => (props.isChoose ? '#FF751D' : '#FFFFFF')};
  border-radius: 16px;
  border-radius: 20px;
  padding: 10px;
  margin-top: 10px;
`;

export const ButtonClose = styled.span`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;
