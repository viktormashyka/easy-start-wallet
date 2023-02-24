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

export const MainHome = ({ children }) => {
  const viewPort = useScreenResizing();
  const [isTransactionsShown, setIsTransactionsShown] = useState(false);

  const handleClick = () => {
    setIsTransactionsShown(!isTransactionsShown);
  };

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
            <OperationList />
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
                  <OperationList />
                </FilterWrapper>
                <div
                  style={{
                    width: '230px',
                    height: '278px',
                    backgroundColor: 'black',
                  }}
                ></div>
              </ContentBox>
            </BottomContentWrapper>

            {/* 1280 +*/}
            <BigFilterWrapper>
              <BtnTopWrapper>
                <TopBtnList />
              </BtnTopWrapper>
              {children}
              <MainContentWrapper>
                <OperationList />
                <div
                  style={{
                    width: '213px',
                    height: '251px',
                    backgroundColor: 'black',
                  }}
                ></div>
              </MainContentWrapper>
            </BigFilterWrapper>
          </>
        )}
      </ContentContainer>
    </MainWrapper>
  );
};
