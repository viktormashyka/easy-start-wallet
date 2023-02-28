import React from 'react';
import useScreenResizing from '../../hooks/useScreenResizing';
import * as SC from './OperationList.styles';
import { ReactComponent as DeleteIcon } from '../../images/delete.svg';
import { Table } from 'components/Table/Table';
import { TableStyle } from '../Table/Table.styled';
import { deleteTransaction } from '../../redux/transaction/transactionOperations';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { UniversalModal } from 'components/UniversalModal/UniversalModal';
import { useState } from 'react';
const modalQuestion = 'Are you sure?';
// Mikhaylo Pobochikh

export const OperationList = ({ sortedTransactions, isLoading }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const viewPort = useScreenResizing();
  const dispatch = useDispatch();

  const onHandleClick = () => {
    console.log('Click Delete on id', selectedId);
    dispatch(deleteTransaction(selectedId));
  };
  const clickButton = id => {
    setSelectedId(id);
    setShowModal(true);
  };

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
      {sortedTransactions.map(el => {
        const expenses = el.transactionsType === 'expenses';
        console.log('el._id', el._id);
        return (
          // Від 320 px до 768

          <SC.List key={el._id}>
            <SC.OperationListWrapper>
              <SC.OperationListDiv>
                <SC.OperationListTitle>{el.description}</SC.OperationListTitle>
                <SC.OperationListDivDate>
                  <SC.OperationListDateTitle>
                    {moment(el.date).format('DD.MM.YYYY')}
                  </SC.OperationListDateTitle>
                  <SC.OperationListDateTitle>{el.category}</SC.OperationListDateTitle>
                </SC.OperationListDivDate>
              </SC.OperationListDiv>
              <SC.OperationListDivBalance>
                {expenses ? (
                  <SC.OperationListDivBalanceTextMinus>{`- ${el.sum} UAH`}</SC.OperationListDivBalanceTextMinus>
                ) : (
                  <SC.OperationListDivBalanceText>{` ${el.sum} UAH`}</SC.OperationListDivBalanceText>
                )}

                <SC.DeleteBtn
                  type="button"
                  id={el._id}
                  onClick={() => clickButton(el._id)}
                >
                  <DeleteIcon />
                </SC.DeleteBtn>
              </SC.OperationListDivBalance>
            </SC.OperationListWrapper>
          </SC.List>
        );
      })}
      {/* Для 769 px + */}

      {viewPort.width > 767 && !isLoading && (
        <TableStyle TableStyle>
          <Table
            columns={columns}
            data={sortedTransactions}
            onHandleClick={clickButton}
          />
        </TableStyle>
      )}

      {showModal && (
        <UniversalModal
          closeModal={setShowModal}
          agreeLogout={onHandleClick}
          question={modalQuestion}
        />
      )}
    </>
  );
};
