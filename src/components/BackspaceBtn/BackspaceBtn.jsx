import { BackspaceVectorIcon, BackButton } from './BackspaceBtn.styled';

export const BackspaceBtn = ({ handleClick, title }) => {
  return (
    <BackButton onClick={handleClick}>
      <BackspaceVectorIcon size="24" />
      {title}
    </BackButton>
  );
};
