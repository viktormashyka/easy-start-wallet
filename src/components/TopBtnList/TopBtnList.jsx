import { ButtonNavList, ButtonLink, ButtonNavLink } from './TopBtnList.styled';

export function TopBtnList() {
  return (
    <ButtonNavList>
      <ButtonNavLink>
        <ButtonLink to="/home" end>
          Expences
        </ButtonLink>
      </ButtonNavLink>
      <ButtonNavLink>
        <ButtonLink to="/home/income">Income</ButtonLink>
      </ButtonNavLink>
    </ButtonNavList>
  );
}
