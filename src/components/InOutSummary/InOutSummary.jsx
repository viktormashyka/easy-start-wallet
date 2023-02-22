import {
  SummaryWrapper,
  SummaryContainer,
  SummaryTitle,
  SummaryExpenses,
  SummaryIncome,
  Strip,
} from './InOutSummary.styled';

export const InOutSummary = () => {
  return (
    <SummaryWrapper>
      <SummaryContainer>
        <SummaryTitle>Expenses:</SummaryTitle>
        <SummaryExpenses>- 18 000.00 UAH.</SummaryExpenses>
      </SummaryContainer>
      <Strip></Strip>
      <SummaryContainer>
        <SummaryTitle>Income:</SummaryTitle>
        <SummaryIncome>+ 45 000.00 UAH.</SummaryIncome>
      </SummaryContainer>
    </SummaryWrapper>
  );
};