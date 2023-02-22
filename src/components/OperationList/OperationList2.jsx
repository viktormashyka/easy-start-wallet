import React from 'react';
import { OperationListWrapper } from './OperationList2.styled';
import { OperationListDiv } from './OperationList2.styled';
import { OperationListDivDate } from './OperationList2.styled';
import { OperationListDivBalance } from './OperationList2.styled';
import { OperationListTitle } from './OperationList2.styled';
import { OperationListDateTitle } from './OperationList2.styled';
import { OperationListDivBalanceText } from './OperationList2.styled';
import { OperationListDivBalanceTextMinus } from './OperationList2.styled';
import { ReactComponent as DeleteIcon } from '../../images/delete.svg';
import { DeleteBtn } from './OperationList2.styled';
import { List } from './OperationList2.styled';
import { Table } from 'components/Table/Table';
import { TableStyle } from '../Table/Table.styled';

import { deleteTransaction } from '../../redux/transaction/transactionOperations';
import { useDispatch } from 'react-redux';

// Mikhaylo Pobochikh

export const OperationList = () => {
  const dispatch = useDispatch();

  const onHandleClick = id => {
    console.log('Click Delete on id', id);
    dispatch(deleteTransaction(id));
  };

  const testFromBack = React.useMemo(
    () => [
      {
        id: '63f60d6e219c60079b2bc95a',
        transactionsType: 'income',
        date: '22.02.23',
        description: 'bla bla bla',
        category: 'Category test',
        sum: '100',
      },
      {
        id: '63f603bb219c60079b2bc94d',
        transactionsType: 'expenses',
        date: '22.02.23',
        description: 'bla bla bla',
        category: 'Category test',
        sum: '100',
      },
      {
        id: '63f603bb219c60079b2bc94d',
        transactionsType: 'expenses',
        date: '22.02.23',
        description: 'bla bla bla',
        category: 'Category test',
        sum: '100',
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'date', // accessor is the "key" in the data
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

  return (
    <>
      {testFromBack.map(el => {
        const expenses = el.transactionsType === 'expenses';
        console.log('el.id', el.id);
        return (
          // Від 320 px до 768
          <List>
            <OperationListWrapper>
              <OperationListDiv>
                <OperationListTitle>{el.description}</OperationListTitle>
                <OperationListDivDate>
                  <OperationListDateTitle>{el.date}</OperationListDateTitle>
                  <OperationListDateTitle>{el.category}</OperationListDateTitle>
                </OperationListDivDate>
              </OperationListDiv>
              <OperationListDivBalance>
                {expenses ? (
                  <OperationListDivBalanceTextMinus>{`- ${el.sum} UAH`}</OperationListDivBalanceTextMinus>
                ) : (
                  <OperationListDivBalanceText>{` ${el.sum} UAH`}</OperationListDivBalanceText>
                )}

                <DeleteBtn
                  type="button"
                  id={el.id}
                  onClick={() => onHandleClick(el.id)}
                >
                  <DeleteIcon />
                </DeleteBtn>
              </OperationListDivBalance>
            </OperationListWrapper>
          </List>
        );
      })}

      {/* Для 769 px + */}
      <TableStyle>
        <Table
          columns={columns}
          data={testFromBack}
          onHandleClick={onHandleClick}
        />
      </TableStyle>
    </>
  );
};
