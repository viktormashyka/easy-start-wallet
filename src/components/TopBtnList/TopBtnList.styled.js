import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ButtonNavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonNavLink = styled.li`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;
export const ButtonLink = styled(NavLink)`
  width: 138px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafbfd;
  color: #000000;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  line-height: 1.17;
  letter-spacing: 2%;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1),
    background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover,
  &:active {
    color: #ff751d;
    background-color: #fefefe;
  }
`;
