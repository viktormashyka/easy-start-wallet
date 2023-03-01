import useScreenResizing from '../../hooks/useScreenResizing';
import { useLocation } from 'react-router-dom';
import { MainWrapper } from '../MainWrapper/MainWrapper';
import { BottomBtnWrapper } from '../BottomBtnWrapper/BottomBtnWrapper';
import { TopBtnList } from '../TopBtnList/TopBtnList';
import { BalanceWrapper } from '../BalanceWrapper/BalanceWrapper';
import { BackspaceBtn } from '../BackspaceBtn/BackspaceBtn';
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
  LoaderWrapper,
  LoaderWrapperBig,
} from './MainHome.styled';
import { OperationList } from 'components/OperationList/OperationList';
import { Table } from 'components/Table/Table';
import { TableStyle } from '../Table/Table.styled';
import { Summary } from 'components/Summary/Sumarry';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTransactions } from 'redux/transaction/transactionOperations';
import { useEffect, useState } from 'react';
import {
  selectAllTransactions,
  selectLoadingTransactions,
} from 'redux/transaction/transactionSelectors';
import { Loader } from 'components/Loader/Loader';

export const MainHome = ({ children }) => {
  const isLoading = useSelector(selectLoadingTransactions);
  const viewPort = useScreenResizing();
  const [isTransactionsShown, setIsTransactionsShown] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const dataFromBack = useSelector(selectAllTransactions);

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  // console.log('dataFromBack:', dataFromBack);

  const handleClick = () => {
    setIsTransactionsShown(isTransactionsShown => !isTransactionsShown);
  };

  const sortedTransactions =
    location.pathname === '/home'
      ? dataFromBack.filter(
          ({ transactionsType }) => transactionsType === 'expenses'
        )
      : dataFromBack.filter(
          ({ transactionsType }) => transactionsType === 'income'
        );
  // console.log('sortedTransactions:', sortedTransactions);

  return (
    <MainWrapper>
      <TopWrapper />
      <BCGLogoBox />
      <ContentContainer>
        {viewPort.width < 768 && !isTransactionsShown && (
          <>
            <BackspaceWrapper>
              <BackspaceBtn handleClick={handleClick} title="to transactions" />
            </BackspaceWrapper>
            <ContentBalanceContainer>
              <BalanceWrapper />
              <DataBox />
            </ContentBalanceContainer>
            {isLoading ? (
              <LoaderWrapper>
                <Loader />
              </LoaderWrapper>
            ) : (
              <OperationList
                isLoading={isLoading}
                sortedTransactions={sortedTransactions}
              />
            )}
            <BottomBtnBox>
              <BottomBtnWrapper />
            </BottomBtnBox>
          </>
        )}
        {viewPort.width < 768 && isTransactionsShown && (
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
            {/* 768-1279 */}
            <BottomContentWrapper>
              <ContentBox>
                <FilterWrapper>
                  <BtnTopWrapper>
                    <TopBtnList />
                  </BtnTopWrapper>
                  {children}
                  {isLoading ? (
                    <LoaderWrapperBig>
                      <Loader />
                    </LoaderWrapperBig>
                  ) : (
                      <TableStyle TableStyle>
                        <Table data={sortedTransactions} />
                      </TableStyle>
                  )}
                </FilterWrapper>
                <Summary sortedTransactions={sortedTransactions} />
              </ContentBox>
            </BottomContentWrapper>
            {/* 1280 +*/}
            <BigFilterWrapper>
              <BtnTopWrapper>
                <TopBtnList />
              </BtnTopWrapper>
              {children}
              <MainContentWrapper>
                {isLoading ? (
                  <LoaderWrapperBig>
                    <Loader />
                  </LoaderWrapperBig>
                ) : (
                  <TableStyle TableStyle>
                        <Table data={sortedTransactions} />
                      </TableStyle>
                )}
                <Summary sortedTransactions={sortedTransactions} />
              </MainContentWrapper>
            </BigFilterWrapper>
          </>
        )}
      </ContentContainer>
    </MainWrapper>
  );
};
