import React from 'react';
import { OperationListWrapper } from './OperationList.styles';
import { OperationListDiv } from './OperationList.styles';
import { OperationListDivDate } from './OperationList.styles';
import { OperationListDivBalance } from './OperationList.styles';
import { OperationListTitle } from './OperationList.styles';
import { OperationListDateTitle } from './OperationList.styles';
import { OperationListDivBalanceText } from './OperationList.styles';
import { OperationListDivBalanceTextMinus } from './OperationList.styles';
import { ReactComponent as DeleteIcon } from '../../images/delete.svg';
import { DeleteBtn } from './OperationList.styles';
import { List } from './OperationList.styles';
import { Table } from 'components/Table/Table';
import { TableStyle } from '../Table/Table.styled';

// Mikhaylo Pobochikh

export const OperationList = () => {
  const onHandleClick = e => {
    e.preventDefault();
    console.log('Click Delete');
  };

  const button = () => {
    return (
      <button type="button" onClick={onHandleClick}>
        <DeleteIcon />
      </button>
    );
  };

  const testSum = '200';

  const data = [
    {
      data: 'Hello',
      description: 'World',
      category: 'Test',
      sum: '- 100',
      icon: button(),
    },
    {
      data: 'react-table',
      description: 'rdsdsdsdsdsdcx',
      category: 'Test',
      sum: '- 100',
      icon: button(),
    },
    {
      data: 'whatever',
      description: 'you want',
      category: 'Test',
      sum: '- 100',
    },
    {
      data: 'whatever',
      description: 'you want',
      category: 'Test',
      sum: 'test',
    },
    {
      data: 'whatever',
      description: 'you want',
      category: 'Test',
      sum: 'test',
    },
    {
      data: 'whatever',
      description: 'you want',
      category: 'Test',
      sum: 'test',
    },
  ];

  const columns = React.useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'data', // accessor is the "key" in the data
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Category',
        accessor: 'category',
      },
      {
        Header: 'Sum',
        accessor: 'sum',
      },
      {
        Header: '',
        accessor: 'icon',
      },
    ],
    []
  );

  const testSumMinus = testSum.includes('-');
  return (
    <>
      <List>
        <OperationListWrapper>
          <OperationListDiv>
            <OperationListTitle>Bonus</OperationListTitle>
            <OperationListDivDate>
              <OperationListDateTitle>date</OperationListDateTitle>
              <OperationListDateTitle>Add</OperationListDateTitle>
            </OperationListDivDate>
          </OperationListDiv>
          <OperationListDivBalance>
            {testSumMinus ? (
              <OperationListDivBalanceTextMinus>{` ${testSum} UAH`}</OperationListDivBalanceTextMinus>
            ) : (
              <OperationListDivBalanceText>{` ${testSum} UAH`}</OperationListDivBalanceText>
            )}

            <DeleteBtn type="button" onClick={onHandleClick}>
              <DeleteIcon />
            </DeleteBtn>
          </OperationListDivBalance>
        </OperationListWrapper>
      </List>
      <TableStyle>
        <Table columns={columns} data={data} />
      </TableStyle>
    </>
  );
};
