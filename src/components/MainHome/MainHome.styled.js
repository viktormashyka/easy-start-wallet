import styled from 'styled-components';
import BCGImageTopTablet from '../../images/TopLogoTablet.png';
import BCGImageBottom from '../../images/BottomLogo.png';
import { ReactComponent as BackspaceIcon } from '../../images/KeyboardBackspace.svg';

// main container //

export const TopWrapper = styled.section`
  position: relative;
  padding: 56px 20px 0 20px;
  min-height: 258px;
  background-color: #f5f6fb;
  border-bottom-left-radius: 80px;
  overflow-x: hidden;
  overflow-y: visible;
  @media screen and (min-width: 768px) {
    padding: 0 32px;
    min-height: 526px;
    border-bottom-left-radius: 180px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 91px;
    border-bottom-left-radius: 110px;
  }
`;

export const TopBalanceWrapper = styled.section`
  position: relative;
  padding: 0 20px;
  min-height: 258px;
  background-color: #f5f6fb;
  border-bottom-left-radius: 80px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    display: none;
    /* padding: 0 32px;
    min-height: 526px;
    border-bottom-left-radius: 180px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 91px;
    border-bottom-left-radius: 110px; */
  }
`;

export const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    background-image: url(${BCGImageBottom});
    background-position: 90% 90%;
    background-repeat: no-repeat;
    background-size: 183px 146px;
  }
  @media screen and (min-width: 1280px) {
    background: url(${BCGImageTopTablet});
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: auto auto;
  }
`;

export const BackspaceVectorIcon = styled(BackspaceIcon)`
  position: absolute;
  top: 5%;
  left: 8%;
  &:hover {
    fill: #ffffff;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

// Form //

export const FilterWrapper = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 280px;
  @media screen and (min-width: 768px) {
    top: 184px;
    left: 50%;
    transform: translateX(-50%);
    width: 704px;
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
