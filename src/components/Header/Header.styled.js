import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SectionHeader = styled.section`
  background-color: #ffffff;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Roboto';
`;

export const LogoWrapper = styled(NavLink)`
  position: relative;
  /* outline: 1px solid black; */
`;

export const Logo = styled.img`
  display: block;
`;

export const Logo2 = styled.img`
  position: absolute;
  top: 0;

  transform: translate(-6px, -6px);
  display: block;
`;

export const LogoTitle = styled.img`
  display: block;
  position: absolute;
  top: 0px;
  transform: translate(25%, 6px);
  /* outline: 1px solid red; */
  /* margin: 0;
  padding: 0; */
`;

export const AuthWrapper = styled.div`
  /* outline: 1px solid red; */
  display: flex;
  align-items: center;
`;

export const UserLogo = styled.div`
  overflow: hidden;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background-color: #f5f6fa;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  cursor: pointer;

  &.active {
    color: orange;
  }
`;
export const LogOutIcon = styled.img`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const LogOutButton = styled.button`
  border: none;
  margin-left: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  padding: 0;
  cursor: pointer;

  /* outline: 1px solid black; */
  @media screen and (min-width: 768px) {
    margin-left: 20px;

    &::before {
      content: '';
      border: 1px solid #e0e5eb;
      height: 36px;
      margin-right: 20px;
    }
    &:hover {
      color: #ff751d;
    }
  }
`;

export const LogOutTitle = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 14px;
    text-decoration: underline;
    display: inline-block;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:active {
      color: red;
    }
  } ;
`;

export const UserTite = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 14px;
    display: inline-block;
    margin-left: 16px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 12px;
  } ;
`;
