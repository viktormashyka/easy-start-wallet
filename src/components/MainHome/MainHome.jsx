import {
  Box,
  FilterWrapper,
  TopBalanceWrapper,
  ContentContainer,
  BottomBtnBox,
  BtnTopWrapper,
  BackspaceWrapper,
  ToBackBtnWrapper,
} from './MainHome.styled';
import { MainWrapper } from '../MainWrapper/MainWrapper';
import { BottomBtnWrapper } from '../BottomBtnWrapper/BottomBtnWrapper';
import { TopBtnList } from '../TopBtnList/TopBtnList';

import { BalanceWrapper } from '../BalanceWrapper/BalanceWrapper';
import { BackspaceBtn } from '../BackspaceBtn/BackspaceBtn';
import { useState } from 'react';

export const MainHome = ({ children }) => {
  const [isTransactionsShown, setIsTransactionsShown] = useState(false);

  // const handleClick = () => {
  //   setIsTransactionsShown(prevState => ({
  //     isTransactionsShown: !prevState.isTransactionsShown,
  //   }));
  // };

  const handleClick = () => {
    setIsTransactionsShown(!isTransactionsShown);
  };
  return (
    <MainWrapper>
      <TopBalanceWrapper />
      {!isTransactionsShown && (
        <>
          <BackspaceWrapper>
            <BackspaceBtn handleClick={handleClick} title="to transactions" />
          </BackspaceWrapper>
          <ContentContainer>
            <BalanceWrapper />
          </ContentContainer>
          <BottomBtnBox>
            <BottomBtnWrapper />
          </BottomBtnBox>
        </>
      )}
      <Box />
      {isTransactionsShown && (
        <FilterWrapper>
          <ToBackBtnWrapper>
            <BackspaceBtn handleClick={handleClick} />
          </ToBackBtnWrapper>
          <BtnTopWrapper>
            <TopBtnList />
          </BtnTopWrapper>
          {children}
        </FilterWrapper>
      )}
    </MainWrapper>
  );
};
