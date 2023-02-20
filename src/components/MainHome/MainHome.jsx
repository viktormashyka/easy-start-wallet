import {
  TopWrapper,
  Box,
  BackspaceVectorIcon,
  FilterWrapper,
  ButtonLink,
  ButtonNavLink,
  ButtonTopList,
  TopBalanceWrapper,
  BtnList,
  BtnLink,
  BtnItem,
  BtnWrapper,
} from './MainHome.styled';
import { MainWrapper } from '../MainWrapper/MainWrapper';
import { ExpencesForm } from '../ExpencesForm/ExpencesForm';
import { IncomeForm } from '../IncomeForm/IncomeForm';
import { BottomBtnWrapper } from '../BottomBtnWrapper/BottomBtnWrapper';
import { TopBtnWrapper } from '../TopButtonWrapper/TopBtnWrapper';

export const MainHome = () => {
  return (
    <MainWrapper>
      {/* <TopBalanceWrapper> 
       //тут рендеримо обгорнутий у дів баланс //  
       </TopBalanceWrapper>  */}
      <TopWrapper />
      <Box>
        <BackspaceVectorIcon />
        <FilterWrapper>
          <TopBtnWrapper />
          <ExpencesForm />
          {/* <IncomeForm /> */}
        </FilterWrapper>
      </Box>
      <BottomBtnWrapper /> --//рендеримо тільки з балансом
    </MainWrapper>
  );
};
