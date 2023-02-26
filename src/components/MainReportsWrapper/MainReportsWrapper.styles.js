import styled from 'styled-components';
import BCGImageTopTablet from '../../images/TopLogoTablet.png';
import BCGImageBottom from '../../images/BottomLogo.png';

export const TopRectangle = styled.div`
  position: absolute;
  z-index: -10;
  width: 100%;
  min-height: 286px;
  background-color: #f5f6fb;
  border-bottom-left-radius: 80px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  @media screen and (min-width: 768px) {
    min-height: 526px;
    box-shadow: none;
    border-bottom-left-radius: 180px;
  }
  @media screen and (min-width: 1280px) {
    border-bottom-left-radius: 110px;
  }
`;

export const BCGLogoBottom = styled.div`
  z-index: -20;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    background-image: url(${BCGImageBottom});
    background-position: 90% 90%;
    background-repeat: no-repeat;
    background-size: 183px 146px;
  }
  @media screen and (min-width: 1280px) {
    background: url(${BCGImageTopTablet});
    background-position: 100% 100%;
    background-repeat: repeat-x;
    background-size: auto;
  }
`;
