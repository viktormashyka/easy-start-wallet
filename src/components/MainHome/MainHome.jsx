import useScreenResizing from '../../hooks/useScreenResizing';
import { MainWrapper } from '../MainWrapper/MainWrapper';
import { BottomBtnWrapper } from '../BottomBtnWrapper/BottomBtnWrapper';
import { TopBtnList } from '../TopBtnList/TopBtnList';
import { BalanceWrapper } from '../BalanceWrapper/BalanceWrapper';
import { BackspaceBtn } from '../BackspaceBtn/BackspaceBtn';
import { useState } from 'react';
import { DataBox } from '../DataBox/DataBox';
import {
  Box,
  FilterWrapper,
  TopBalanceWrapper,
  ContentBalanceContainer,
  ContentFormContainer,
  BottomBtnBox,
  BtnTopWrapper,
  BackspaceWrapper,
} from './MainHome.styled';
import { OperationList } from 'components/OperationList/OperationList';

export const MainHome = ({ children }) => {
  const viewPort = useScreenResizing();
  const [isTransactionsShown, setIsTransactionsShown] = useState(false);

  const handleClick = () => {
    setIsTransactionsShown(!isTransactionsShown);
  };

  return (
    <MainWrapper>
      <TopBalanceWrapper />
      <Box />
      {!isTransactionsShown && viewPort.width < 768 && (
        <>
          <BackspaceWrapper>
            <BackspaceBtn handleClick={handleClick} title="to transactions" />
          </BackspaceWrapper>
          <ContentBalanceContainer>
            <BalanceWrapper />
            <DataBox />
          </ContentBalanceContainer>
          <OperationList />
          <BottomBtnBox>
            <BottomBtnWrapper />
          </BottomBtnBox>
        </>
      )}
      {isTransactionsShown && viewPort.width < 768 && (
        <>
          <ContentFormContainer>
            <FilterWrapper>
              <BackspaceWrapper>
                <BackspaceBtn handleClick={handleClick} />
              </BackspaceWrapper>
              <BtnTopWrapper>
                <TopBtnList />
              </BtnTopWrapper>
              {children}
            </FilterWrapper>
          </ContentFormContainer>
        </>
      )}
      {viewPort.width > 767 && (
        <>
          <ContentBalanceContainer>
            <BalanceWrapper />
          </ContentBalanceContainer>
          <ContentFormContainer>
            <FilterWrapper>
              <BackspaceWrapper>
                <BackspaceBtn handleClick={handleClick} />
              </BackspaceWrapper>
              <BtnTopWrapper>
                <TopBtnList />
              </BtnTopWrapper>
              {children}
              <OperationList />
            </FilterWrapper>
          </ContentFormContainer>
        </>
      )}
    </MainWrapper>
  );
};
