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
          <ButtonLink to="expenses">Expences</ButtonLink>
        </ButtonNavLink>
        <ButtonNavLink>
          <ButtonLink to="income">Income</ButtonLink>
        </ButtonNavLink>
      </ButtonTopList>
    </>
  );
}
