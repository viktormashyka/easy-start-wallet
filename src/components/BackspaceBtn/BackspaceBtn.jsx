import {
  BackspaceVectorIcon,
  BackspaceWrapper,
  BackButton,
} from './BackspaceBtn.styled';

export const BackspaceBtn = ({ handleClick }) => {
  return (
    <BackspaceWrapper>
      <BackButton onClick={handleClick}>
        <BackspaceVectorIcon />
        to transaction
      </BackButton>
    </BackspaceWrapper>
  );
};
