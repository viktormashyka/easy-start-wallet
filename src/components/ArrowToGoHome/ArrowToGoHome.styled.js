import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const GoHomeBox = styled.div`
  position: absolute;
  top: 16px;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    position: static;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-left: 23px;

  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  color: rgba(82, 85, 95, 0.7);
  text-decoration: none;

  @media screen and (min-width: 768px) {
    /* margin-left: 35px; */
    margin-left: 0;
  }
  @media screen and (max-width: 1279px) {
    margin-right: auto;
  }
`;

//Nataliia changed:
export const Arrow = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})`
  width: 18px;
  height: 12px;
  fill: none;
`;

export const Title = styled.p`
  margin-left: 18px;
  &:hover {
    color: #ff751d;
  }
`;
