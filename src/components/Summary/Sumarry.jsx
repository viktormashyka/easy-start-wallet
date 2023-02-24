import {
  Table,
  Tr,
  Td,
  Th,
  SummaryFalse,
  SummaryTitle,
} from './Summary.styled';
import { useSelector } from 'react-redux';
import { selectAllTransactions } from '../../redux/transaction/transactionSelectors.js';

export const Summary = () => {
  let transactions = useSelector(selectAllTransactions);
  if (transactions.length < 1) {
    return (
      <SummaryFalse>
        <SummaryTitle>SUMMARY</SummaryTitle>
      </SummaryFalse>
    );
  }
  if (transactions.length > 6) {
    transactions = transactions.slice(0, 6);
  }
  return (
    <div>
      <Table>
        <thead>
          <Tr>
            <Th colSpan="2">Summary</Th>
          </Tr>
        </thead>
        <tbody>
          {transactions.map(({ _id, date, sum }) => (
            <Tr key={_id}>
              <Td>{date}</Td>
              <Td>{sum}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
