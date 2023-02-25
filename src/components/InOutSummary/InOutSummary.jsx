import {
  SummaryWrapper,
  SummaryContainer,
  SummaryTitle,
  SummaryExpenses,
  SummaryIncome,
  Strip,
} from './InOutSummary.styled';
import { useSelector } from 'react-redux';
import { selectAllTransactionsReport } from 'redux/transaction/transactionSelectors';

export const InOutSummary = () => {
  const report = useSelector(selectAllTransactionsReport);
  console.log('report', report);
  const transactions = report.filterTransactions;
  console.log('transactions', transactions);
  // console.log('transactions.length', transactions.length);
  // console.log(!transactions || transactions.length === 0);

  const getTransactionByType = (transactions, type) => {
    if (!transactions || transactions.length === 0) {
      return 0;
    }
      if (transactions) {
        // console.log('transactions', transactions);
        const filteredTransactionsByType = transactions.filter(
          ({ transactionsType }) => transactionsType === type
        );
        // console.log('filteredTransactionsByType', filteredTransactionsByType);
        return filteredTransactionsByType;
      }
  };

  const calculatedSum = sum => `${Number(sum).toFixed(2).padStart(5, 0)} UAH.`;

  const calculatedBalance = (filteredTransactions) => {
    if (filteredTransactions === 0 ||filteredTransactions.length === 0) {
      // console.log(
      //   'transactions.length === 0',
      //   filteredTransactions.length === 0
      // );
      return calculatedSum(0);
    }
    const sum = filteredTransactions.reduce((acc, el) => acc + el.sum, 0);
    console.log('sum', sum);
    return calculatedSum(sum);
  };

  const expensesTransactions = getTransactionByType(transactions, 'expenses');
  const calculatedExpensesBalance = calculatedBalance(expensesTransactions);

  const incomeTransactions = getTransactionByType(transactions, 'income');
  const calculatedIncomeBalance = calculatedBalance(incomeTransactions);

  // const filteredBalances = transactions.reduce(
  //   (acc, el) => {
  //     if (el.transactionsType === 'expenses') {
  //       console.log('acc[0]', acc[0]);
  //       acc[0] = acc[0] + el.sum;
  //     }
  //     if (el.transactionsType === 'income') {
  //       acc[1] = acc[1] + el.sum;
  //     }
  //     return acc;
  //   },
  //   [0, 0]
  // );

  return (
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
  );
};