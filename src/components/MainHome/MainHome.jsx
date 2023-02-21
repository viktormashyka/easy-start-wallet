import { Outlet } from 'react-router-dom';
import {
  Box,
  BackspaceVectorIcon,
  FilterWrapper,
  TopBalanceWrapper,
  ContentContainer,
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
import { BalanceWrapper } from '../BalanceWrapper/BalanceWrapper';
import { BackLink } from '../BackLink/BackLink';
import { useState } from 'react';

export const MainHome = ({ children }) => {
  // const [isTransactionsShown, setIsTransactionsShown] = useState(false);

  // const handleClick = () => {
  //   setIsTransactionsShown(prevState => ({
  //     isTransactionsShown: !prevState.isTransactionsShown,
  //   }));
  // };
  return (
    <MainWrapper>
      <TopBalanceWrapper />
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px;',
        }}
      >
        <button
        // onClick={handleClick}
        >
          ///
        </button>
      </div>
      <ContentContainer>
        <BalanceWrapper />
      </ContentContainer>
      <BottomBtnWrapper />
      <button
        style={{
          position: 'absolute',
          top: '5%',
          left: '8%',
        }}
        // onClick={handleClick}
      >
        <BackspaceVectorIcon />
      </button>
      <Box />
      <FilterWrapper>
        <TopBtnWrapper />
        {children}
      </FilterWrapper>
    </MainWrapper>
  );
};
