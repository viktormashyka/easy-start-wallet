import styled from 'styled-components';
import BCGImageTopTablet from '../../images/TopLogoTablet.png';
import BCGImageBottom from '../../images/BottomLogo.png';

// main container //

export const ContentContainer = styled.div`
  padding-top: 44px;
  @media screen and (min-width: 768px) {
    padding-top: 40px;
  }
`;

export const ContentBalanceContainer = styled.div`
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
    padding-left: 32px;
    padding-right: 32px;
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    width: 1098px;
  }
`;

export const TopWrapper = styled.div`
  position: absolute;
  z-index: -10;
  width: 100%;
  min-height: 258px;
  background-color: #f5f6fb;
  border-bottom-left-radius: 80px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    min-height: 526px;
    border-bottom-left-radius: 180px;
  }
  @media screen and (min-width: 1280px) {
    border-bottom-left-radius: 110px;
  }
`;

export const BCGLogoBox = styled.div`
  z-index: -20;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;

  @media screen and (min-width: 1280px) {
    background: url(${BCGImageTopTablet});
    background-position: 0 125%;
    background-repeat: repeat-x;
    background-size: auto;
  }
`;

export const BottomContentWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 184px;
  left: 50%;
  transform: translateX(-50%);
  @media screen and (min-width: 768px) {
    background-image: url(${BCGImageBottom});
    background-position: 90% 90%;
    background-repeat: no-repeat;
    background-size: 183px 146px;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderWrapperBig = styled.div`
  @media screen and (min-width: 768px) {
    width: 624px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 1280px) {
    width: 746px;
  }
`;
// Form //

export const ContentBox = styled.div`
  position: relative;
  width: 704px;
  height: 100%;
  margin: 0 auto;
  background-color: transparent;
  padding-bottom: 60px;
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const MainContentWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const BigFilterWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
    position: absolute;
    top: 132px;
    left: 50%;
    transform: translateX(-50%);
    width: 1098px;
    margin-bottom: 40px;
    box-sizing: border-box;
    padding: 32px 32px 61px 32px;
    background-color: #fff;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
    border-top-left-radius: 0px;
    box-shadow: 0px 10px 60px 0px rgba(170, 178, 197, 0.2);
  }
`;

export const FilterWrapper = styled.div`
  width: 280px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 704px;
    margin-bottom: 40px;
    box-sizing: border-box;
    padding: 24px 40px 42px 40px;
    background-color: #fff;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
    border-top-left-radius: 0px;
    box-shadow: 0px 10px 60px 0px rgba(170, 178, 197, 0.2);
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 132px;
    left: 50%;
    transform: translateX(-50%);
    width: 1098px;
    padding: 32px 32px 61px 32px;
    background-color: #fff;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
    border-top-left-radius: 0px;
    box-shadow: 0px 10px 60px 0px rgba(170, 178, 197, 0.2);
  }
`;

export const BottomBtnBox = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const BtnTopWrapper = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    bottom: 100%;
    left: 0;
  }
`;

export const BackspaceWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  text-transform: uppercase;
`;
