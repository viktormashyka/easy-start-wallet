import {
  TopWrapper,
  Box,
  BackspaceVectorIcon,
  FilterWrapper,
  ButtonLink,
  ButtonNavLink,
  ButtonTopList,
} from './MainHome.styled';
import { MainWrapper } from '../MainWrapper/MainWrapper';
import { IncomeForm } from '../IncomeForm/IncomeForm';
import { ExpensesForm } from '../ExpensesForm/ExpensesForm';

export const MainHome = () => {
  return (
    <MainWrapper>
      <TopWrapper />
      <Box>
        <BackspaceVectorIcon />
        <FilterWrapper>
          <ButtonTopList>
            <ButtonNavLink>
              <ButtonLink>Expences</ButtonLink>
            </ButtonNavLink>
            <ButtonNavLink>
              <ButtonLink>Income</ButtonLink>
            </ButtonNavLink>
          </ButtonTopList>
          <ExpensesForm />
          {/* <IncomeForm /> */}
        </FilterWrapper>
      </Box>
    </MainWrapper>
  );
};
