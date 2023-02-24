import { useLocation } from 'react-router-dom';
import useScreenResizing from '../../hooks/useScreenResizing';
import { MainWrapper } from '../MainWrapper/MainWrapper';
import { BottomBtnWrapper } from '../BottomBtnWrapper/BottomBtnWrapper';
import { TopBtnList } from '../TopBtnList/TopBtnList';
import { BalanceWrapper } from '../BalanceWrapper/BalanceWrapper';
import { BackspaceBtn } from '../BackspaceBtn/BackspaceBtn';
import { useState } from 'react';
import { DataBox } from '../DataBox/DataBox';
import {
  BCGLogoBox,
  FilterWrapper,
  TopWrapper,
  ContentBalanceContainer,
  BottomBtnBox,
  BtnTopWrapper,
  BackspaceWrapper,
  ContentContainer,
  BottomContentWrapper,
  ContentBox,
  MainContentWrapper,
  BigFilterWrapper,
} from './MainHome.styled';
import { OperationList } from 'components/OperationList/OperationList';
import { Summary } from 'components/Summary/Sumarry';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTransactions } from '1/redux/transaction/transactionOperations';
import { useEffect } from 'react';
import { selectAllTransactions } from 'redux/transaction/transactionSelectors';

export const MainHome = ({ children }) => {
  const viewPort = useScreenResizing();
  const [isTransactionsShown, setIsTransactionsShown] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const dataFromBack = useSelector(selectAllTransactions);

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  console.log('dataFromBack:', dataFromBack);

  const handleClick = () => {
    setIsTransactionsShown(!isTransactionsShown);
  };

  const sortedTransactions = 
    location.pathname === '/home'
  ? dataFromBack.filter(
    ({ transactionsType }) => transactionsType === 'expenses'
      )
      :
      dataFromBack.filter(
        ({ transactionsType }) => transactionsType === "income");  
  console.log('sortedTransactions:', sortedTransactions)

  return (
    <MainWrapper>
      <TopWrapper />
      <BCGLogoBox />
      <ContentContainer>
        {!isTransactionsShown && viewPort.width < 768 && (
          <>
            <BackspaceWrapper>
              <BackspaceBtn handleClick={handleClick} title="to transactions" />
            </BackspaceWrapper>
            <ContentBalanceContainer>
              <BalanceWrapper />
              <DataBox />
            </ContentBalanceContainer>
            <OperationList sortedTransactions={sortedTransactions}/>
            <BottomBtnBox>
              <BottomBtnWrapper />
            </BottomBtnBox>
          </>
        )}
        {isTransactionsShown && viewPort.width < 768 && (
          <>
            <FilterWrapper>
              <BackspaceWrapper>
                <BackspaceBtn handleClick={handleClick} />
              </BackspaceWrapper>
              <BtnTopWrapper>
                <TopBtnList />
              </BtnTopWrapper>
              {children}
            </FilterWrapper>
          </>
        )}
        {viewPort.width > 767 && (
          <>
            <ContentBalanceContainer>
              <BalanceWrapper />
            </ContentBalanceContainer>
            {/* 767-1279 */}
            <BottomContentWrapper>
              <ContentBox>
                <FilterWrapper>
                  <BtnTopWrapper>
                    <TopBtnList />
                  </BtnTopWrapper>
                  {children}
                  <OperationList sortedTransactions={sortedTransactions}/>
                </FilterWrapper>
                <Summary />
              </ContentBox>
            </BottomContentWrapper>
            {/* 1280 +*/}
            <BigFilterWrapper>
              <BtnTopWrapper>
                <TopBtnList />
              </BtnTopWrapper>
              {children}
              <MainContentWrapper>
                <OperationList sortedTransactions={sortedTransactions}/>
                <Summary />
              </MainContentWrapper>
            </BigFilterWrapper>
          </>
        )}
      </ContentContainer>
    </MainWrapper>
  );
};
