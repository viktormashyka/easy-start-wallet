import {
  ReportBalance,
  BalanceLabel,
  ButtonsGroup,
  BalanceInput,
  BalanceButton,
} from './Balance.styled';
const Balance = () => {
  return (
    <ReportBalance>
      <BalanceLabel htmlFor="balans">
        Balance:
        <ButtonsGroup>
          <BalanceInput
            type="text"
            name="name"
            maxLength="10"
            placeholder="00.00"
            autoComplete="off"
          />
          <BalanceButton>Confirm</BalanceButton>
        </ButtonsGroup>
      </BalanceLabel>
    </ReportBalance>
  );
};

export default Balance;
