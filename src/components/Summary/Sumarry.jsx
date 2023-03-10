import {
  Table,
  Tr,
  Td,
  Th,
  SummaryFalse,
  SummaryTitle,
} from './Summary.styled';
import moment from 'moment';

export const Summary = ({ sortedTransactions }) => {
  let result = sortedTransactions.reduce((accumulator, current) => {
    const existing = accumulator.find(
      item =>
        item.date.toString().slice(0, 7) === current.date.toString().slice(0, 7)
    );

    if (existing) {
      existing.sum += current.sum;
    } else {
      accumulator.push({ ...current });
    }
    return accumulator;
  }, []);

  if (result.length < 1) {
    return (
      <SummaryFalse>
        <SummaryTitle>SUMMARY</SummaryTitle>
      </SummaryFalse>
    );
  }
  if (result.length > 6) {
    result = result.slice(0, 6);
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
          {result.map(({ _id, date, sum }) => (
            <Tr key={_id}>
              <Td>{moment(date).format('MMMM')}</Td>
              <Td>{`${Number(sum).toFixed(2).padStart(5, 0)}`}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
