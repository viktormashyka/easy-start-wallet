import {
  ButtonLink,
  ButtonNavLink,
  ButtonTopList,
} from './TopBtnWrapper.styled';

export function TopBtnWrapper() {
  return (
    <>
      <ButtonTopList>
        <ButtonNavLink>
          <ButtonLink>Expences</ButtonLink>
        </ButtonNavLink>
        <ButtonNavLink>
          <ButtonLink>Income</ButtonLink>
        </ButtonNavLink>
      </ButtonTopList>
    </>
  );
}
