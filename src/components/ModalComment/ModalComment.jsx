import * as SC from './ModalComment.styled';

export const ModalComment = () => {
  return (
    <SC.ModalWrap>
      <SC.Square></SC.Square>
      <SC.ModalContent>
        <SC.ModalTextMain>
          Hello! To get started, enter the current balance of your account!
        </SC.ModalTextMain>
        <SC.ModalTextSecond>
          You can't spend money until you have it :)
        </SC.ModalTextSecond>
      </SC.ModalContent>
    </SC.ModalWrap>
  );
};
