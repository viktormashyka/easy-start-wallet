import { Table } from './Summary.styled';
import { Tr } from './Summary.styled';
import { Td } from './Summary.styled';
import { Th } from './Summary.styled';
import { SummaryFalse } from './Summary.styled';
import { SummaryTitle } from './Summary.styled';

export const Summary = () => {
  const isUserLogin = true;

  return isUserLogin ? (
    <div>
      <Table>
        <thead>
          <Tr>
            <Th colSpan="2">Summary</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td>November</Td>
            <Td>14000</Td>
          </Tr>
          <Tr>
            <Td>November</Td>
            <Td>14000</Td>
          </Tr>
          <Tr>
            <Td>November</Td>
            <Td>14000</Td>
          </Tr>
        </tbody>
      </Table>
    </div>
  ) : (
    <SummaryFalse>
      <SummaryTitle>SUMMARY</SummaryTitle>
    </SummaryFalse>
  );
};
