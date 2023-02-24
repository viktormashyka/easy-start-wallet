

import { ModalComment } from '../ModalComment/ModalComment';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBalance, getBalance, changeIsNotNewUser } from 'redux/auth/authOperations';
import { selectBalance, selectIsNotNewUser } from 'redux/auth/authSelectors';
import {
  ReportBalance,
  BalanceLabel,
  ButtonsGroup,
  BalanceInput,
  BalanceButton,
  BalanceReportInput,
} from './Balance.styled';
import { useLocation } from 'react-router';

const Balance = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBalance());
  }, [dispatch]);

  const userBalance = useSelector(selectBalance);
  const isNotNewUser = useSelector(selectIsNotNewUser);
  const isBalanceDisabled = isNotNewUser || userBalance !== 0;
  const calculatedBalance = `${Number(userBalance)
    .toFixed(2)
    .padStart(5, 0)} UAH`;
  
  const location = useLocation()
  console.log(location);
  const buttonIsNotShown =
    location.pathname === '/report' || location.pathname === '/report/income';
  console.log(buttonIsNotShown);
  
  const [balance, setBalance] = useState('');
  const handleChangeInput = e => setBalance(e.currentTarget.value);

  const handleSetBalance = e => {
    e.preventDefault();
    console.log(Number(balance));
    dispatch(updateBalance({ balance }));
    setBalance('');
    dispatch(changeIsNotNewUser({ isNotNewUser: true}));
  };

  return (
    <ReportBalance onSubmit={handleSetBalance}>
      <BalanceLabel htmlFor="balans">
        Balance:
        <ButtonsGroup>
          {!buttonIsNotShown && (
            <>
              <BalanceInput
                type="text"
                name="balance"
                pattern="^(([0-9]*)|(([0-9]*)\.([0-9]*)))$"
                title="Вalance must be whole numbers (or decimal numbers)"
                placeholder={calculatedBalance}
                value={balance}
                autoComplete="off"
                disabled={isBalanceDisabled}
                onChange={handleChangeInput}
              />

              <BalanceButton type="submit" disabled={isBalanceDisabled}>
                Confirm
              </BalanceButton>
            </>
          )}
          {buttonIsNotShown && (
            <BalanceReportInput
              placeholder={calculatedBalance}
              disabled={isBalanceDisabled}
            />
          )}
        </ButtonsGroup>
      </BalanceLabel>
      {!isBalanceDisabled && <ModalComment />}
    </ReportBalance>
  );
};

export default Balance;
