import React, { useEffect } from 'react';
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

import { deleteTransaction } from '../../redux/transaction/transactionOperations';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTransactions } from 'redux/transaction/transactionOperations';
import { selectAllTransactions } from 'redux/transaction/transactionSelectors';
import moment from 'moment';

// Mikhaylo Pobochikh

export const OperationList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  const onHandleClick = id => {
    console.log('Click Delete on id', id);
    dispatch(deleteTransaction(id));
  };

  const dataFromBack = useSelector(selectAllTransactions);
  console.log(dataFromBack);
  //Сортуємо по датах, потрібен такий формат '2012-01-26T13:51:50.417-07:00'
// const sortedTransactions = dataFromBack.sort((firstTransaction, secondTransaction) => Date.parse(secondTransaction.date) - Date.parse(firstTransaction.date));  
//Вибираємо лише витрати:
  const expensesTransactions = dataFromBack.filter(({ transactionsType }) => transactionsType === "expenses");
  console.log('expensesTransactions:', expensesTransactions);
//Вибираємо лише доходи: 
  // const incomeTransactions = dataFromBack.filter(({ transactionsType }) => transactionsType === "income");
  // console.log('incomeTransactions:', incomeTransactions);
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
      {expensesTransactions.map(el => {
        const expenses = el.transactionsType === 'expenses';
        console.log('el._id', el._id);
        return (
          // Від 320 px до 768
          <List key={el._id}>
            <OperationListWrapper >
              <OperationListDiv >
                <OperationListTitle>{el.description}</OperationListTitle>
                <OperationListDivDate>
                  <OperationListDateTitle>{moment(el.date).format('DD.MM.YYYY')}</OperationListDateTitle>
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
                  id={el._id}
                  onClick={() => onHandleClick(el._id)}
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
          data={expensesTransactions}
          onHandleClick={onHandleClick}
        />
      </TableStyle>
    </>
  );
};
