import {
  TopWrapper,
  Box,
  BackspaceVectorIcon,
  FilterWrapper,
  // ButtonLink,
  // ButtonNavLink,
  // ButtonTopList,
  // TopBalanceWrapper,
  // BtnList,
  // BtnLink,
  // BtnItem,
  // BtnWrapper,
} from './MainHome.styled';
import { MainWrapper } from '../MainWrapper/MainWrapper';
import { BottomBtnWrapper } from '../BottomBtnWrapper/BottomBtnWrapper';
import { TopBtnWrapper } from '../TopButtonWrapper/TopBtnWrapper';
// import { BalanceWrapper } from 'components/BalanceWrapper/BalanceWrapper';

export const MainHome = ({ children }) => {
  return (
    <MainWrapper>
      {/* <TopBalanceWrapper> 
        <BalanceWrapper />
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
