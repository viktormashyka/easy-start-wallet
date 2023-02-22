import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';

import { SectionHeader } from './Header.styled';
// Icon for header
import Rectangle19 from '../../images/Rectangle19.svg';
import Rectangle20 from '../../images/Rectangle20.svg';
import Union from '../../images/Union.svg';
import Logout from '../../images/logout.svg';

import { LogoWrapper } from './Header.styled';
import { Logo } from './Header.styled';
import { Logo2 } from './Header.styled';

import { LogoTitle } from './Header.styled';
import { AuthWrapper } from './Header.styled';
import { UserLogo } from './Header.styled';
import { LogOutIcon } from './Header.styled';
import { LogOutButton } from './Header.styled';
import { LogOutTitle } from './Header.styled';
import { UserTite } from './Header.styled';
import { logOut } from 'redux/auth/authOperations';

// Mikhaylo Pobochikh

export const Header = ({ isLoggedIn }) => {
  console.log(isLoggedIn);
  const dispatch = useDispatch();
  // const isUserLogin = true;
  const onHandleClick = e => {
    e.preventDefault();
    console.log('Click on button Logout');
    dispatch(logOut());
  };

  return (
    <header>
      <SectionHeader>
        <LogoWrapper>
          <Logo src={Rectangle19} alt="Logo" />
          <Logo2 src={Rectangle20} alt="Logo" />
          <LogoTitle src={Union} alt="Logo" />
        </LogoWrapper>
        {isLoggedIn && (
          <AuthWrapper>
            <UserLogo>U</UserLogo>
            <UserTite>User Name</UserTite>

            <LogOutButton type="button" onClick={onHandleClick}>
              <LogOutIcon src={Logout} alt="Logout icon" />

              <LogOutTitle>Exit</LogOutTitle>
            </LogOutButton>
          </AuthWrapper>
        )}
      </SectionHeader>
    </header>
  );
};
