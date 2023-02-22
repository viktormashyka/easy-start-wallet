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
      {!isTransactionsShown && (
        <>
          <BackspaceWrapper>
            <BackspaceBtn handleClick={handleClick} title="to transactions" />
          </BackspaceWrapper>
          <ContentBalanceContainer>
            <BalanceWrapper />
            {viewPort.width < 768 ? <DataBox /> : null}
          </ContentBalanceContainer>
          <BottomBtnBox>
            <BottomBtnWrapper />
          </BottomBtnBox>
        </>
      )}
      <Box />
      {isTransactionsShown && (
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
              {viewPort.width >= 768 && <OperationList />}
            </FilterWrapper>
            {viewPort.width < 768 ? <OperationList /> : null}
          </ContentFormContainer>
        </>
      )}
    </MainWrapper>
  );
};
