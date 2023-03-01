import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
`;

export const Tr = styled.tr`
  /* border: 1px solid; */
  background: #f5f6fb;
  font-size: 12px;
  text-transform: uppercase;
  &:last-child td:last-child {
    border-bottom-right-radius: 20px;
  }
`;

export const Td = styled.td`
  border-style: solid;
  border-width: 0 0 2px 0;
  border-color: white;
  padding: 15px 22px;
  font-family: 'Roboto';
`;

export const Th = styled.th`
  background: #f5f6fb;
  font-size: 12px;
  text-transform: uppercase;
  padding: 15px 77px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-style: solid;
  border-width: 0 0 2px 0;
  border-color: white;
  font-family: 'Roboto';
  font-weight: 700;
`;

export const SummaryFalse = styled.div`
  height: 242px;
  width: 213px;
  background: #f5f6fb;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  text-align: center;
  /* font-weight: bold; */
  font-size: 12px;
  padding-top: 15px;
`;

export const SummaryTitle = styled.p`
  margin: 0;
`;
