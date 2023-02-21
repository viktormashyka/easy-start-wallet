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
          <BackspaceBtn handleClick={handleClick} />
          <ContentContainer>
            <BalanceWrapper />
          </ContentContainer>
          <BottomBtnWrapper />
        </>
      )}
      <Box />
      {isTransactionsShown && (
        <FilterWrapper>
          <button
            style={{
              position: 'absolute',
              top: '-60px',
              left: '-60px',
            }}
            onClick={handleClick}
          >
            <BackspaceVectorIcon />
          </button>
          <TopBtnWrapper />
          {children}
        </FilterWrapper>
      )}
    </MainWrapper>
  );
};
