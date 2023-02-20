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
import { BottomBtnWrapper } from '../BottomBtnWrapper/BottomBtnWrapper';
import { TopBtnWrapper } from '../TopButtonWrapper/TopBtnWrapper';

export const MainHome = ({ children }) => {
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
          {children}
        </FilterWrapper>
      </Box>
      <BottomBtnWrapper />
    </MainWrapper>
  );
};
