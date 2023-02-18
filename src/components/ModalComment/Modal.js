import * as SC from 'components/Modal/Modal.styled';

export const Modal = () => {
  return (
    <SC.ModalWrap>
      <SC.Square></SC.Square>
      <SC.ModalComment>
        <SC.ModalTextMain>
          Hello! To get started, enter the current balance of your account!
        </SC.ModalTextMain>
        <SC.ModalTextSecond>
          You can't spend money until you have it :)
        </SC.ModalTextSecond>
      </SC.ModalComment>
    </SC.ModalWrap>
  );
};
