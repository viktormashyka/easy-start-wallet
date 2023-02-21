import { ButtonNavList, ButtonLink, ButtonNavLink } from './TopBtnList.styled';

export function TopBtnList() {
  return (
    <ButtonNavList>
      <ButtonNavLink>
        <ButtonLink to="expenses">Expences</ButtonLink>
      </ButtonNavLink>
      <ButtonNavLink>
        <ButtonLink to="income">Income</ButtonLink>
      </ButtonNavLink>
    </ButtonNavList>
  );
}
