import { Table, Tr, Td, Th, SummaryFalse, SummaryTitle } from './Summary.styled';

export const Summary = ({ transactions }) => {

  if (transactions.length > 6) {
    transactions = transactions.slice(0, 6);
  }
  const isUserLogin = true;
  return isUserLogin ? (
    <div>
      <Table>
        <thead>
          <Tr>
            <Th colSpan="2">Summary</Th>
          </Tr>
        </thead>
        <tbody>{transactions.map(({ id, month, money }) =>
          <Tr key={id}>
            <Td>{month}</Td>
            <Td>{money}</Td>
          </Tr>)}
        </tbody>
      </Table>
    </div>
  ) : (
    <SummaryFalse>
      <SummaryTitle>SUMMARY</SummaryTitle>
    </SummaryFalse>
  );
};
