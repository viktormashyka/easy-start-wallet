import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const GoReport = styled.div`
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    display: flex;
    /* width: 154px; */
    height: 24px;
    align-items: center;
    /* margin-left: 111px; */
    margin-bottom: 0;
    margin-left: auto;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 205px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  &:hover {
    color: #000;
  }

  @media screen and (min-width: 768px) {
    display: flex;

    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.04em;

    color: #52555f;
    cursor: pointer;
  }
`;
