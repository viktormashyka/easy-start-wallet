import React from 'react';
import useScreenResizing from '../../hooks/useScreenResizing';
import { OperationListWrapper } from './OperationList.styles';
import { OperationListDiv } from './OperationList.styles';
import { OperationListDivDate } from './OperationList.styles';
import { OperationListDivBalance } from './OperationList.styles';
import { OperationListTitle } from './OperationList.styles';
import { OperationListDateTitle } from './OperationList.styles';
import { OperationListDivBalanceText } from './OperationList.styles';
import { OperationListDivBalanceTextMinus } from './OperationList.styles';
import { LoaderWrapper } from './OperationList.styles';
import { ReactComponent as DeleteIcon } from '../../images/delete.svg';
import { DeleteBtn } from './OperationList.styles';
import { List } from './OperationList.styles';
import { Table } from 'components/Table/Table';
import { TableStyle } from '../Table/Table.styled';

import { deleteTransaction } from '../../redux/transaction/transactionOperations';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { UniversalModal } from 'components/UniversalModal/UniversalModal';
import { useState } from 'react';
import { Loader } from '../Loader/Loader';
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

          <List key={el._id}>
            <OperationListWrapper>
              <OperationListDiv>
                <OperationListTitle>{el.description}</OperationListTitle>
                <OperationListDivDate>
                  <OperationListDateTitle>
                    {moment(el.date).format('DD.MM.YYYY')}
                  </OperationListDateTitle>
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
                  onClick={() => clickButton(el._id)}
                >
                  <DeleteIcon />
                </DeleteBtn>
              </OperationListDivBalance>
            </OperationListWrapper>
          </List>
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
