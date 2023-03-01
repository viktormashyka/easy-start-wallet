import {
  SummaryWrapper,
  SummaryContainer,
  SummaryTitle,
  SummaryExpenses,
  SummaryIncome,
  Strip,
  Wrapper,
} from './InOutSummary.styled';
import { useSelector } from 'react-redux';
import { selectAllTransactionsReport } from 'redux/transaction/transactionSelectors';

const calculatedSums = sums =>
  sums.map(sum => `${Number(sum).toFixed(2).padStart(5, 0)} UAH.`);

const getExspensesAndIncomeSum = trans => {
  if (!trans || trans.length === 0) {
    // console.log('!trans || trans.length === 0', !trans || trans.length === 0);
    return [0, 0];
  }

  return trans.reduce(
    (acc, tran) =>
      //   [
      //   el.transactionsType === 'expenses' ? acc[0] + el.sum : acc[0],
      //   el.transactionsType === 'income' ? acc[1] + el.sum : acc[1],
      // ],
      {
        if (tran.transactionsType === 'expenses') {
          acc[0] = acc[0] + tran.sum;
        }
        if (tran.transactionsType === 'income') {
          acc[1] = acc[1] + tran.sum;
        }
        return acc;
      },
    [0, 0]
  );
};

export const InOutSummary = () => {
  const report = useSelector(selectAllTransactionsReport);
  // console.log('report', report);
  const transactions = report.filterTransactions;

  const [calculatedExpensesBalance, calculatedIncomeBalance] = calculatedSums(
    getExspensesAndIncomeSum(transactions)
  );
  // console.log('calculatedBalance',calculatedExpensesBalance, calculatedIncomeBalance );

  return (
    <Wrapper>
      <SummaryWrapper>
        <SummaryContainer>
          <SummaryTitle>Expenses:</SummaryTitle>
          <SummaryExpenses>-{calculatedExpensesBalance}</SummaryExpenses>
        </SummaryContainer>
        <Strip></Strip>
        <SummaryContainer>
          <SummaryTitle>Income:</SummaryTitle>
          <SummaryIncome>+{calculatedIncomeBalance}</SummaryIncome>
        </SummaryContainer>
      </SummaryWrapper>
    </Wrapper>
  );
};
