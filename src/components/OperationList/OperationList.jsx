import React from 'react';
import * as SC from './OperationList.styles';
import { ReactComponent as DeleteIcon } from '../../images/delete.svg';
import { deleteTransaction } from '../../redux/transaction/transactionOperations';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { UniversalModal } from 'components/UniversalModal/UniversalModal';
import { useState } from 'react';
import { nanoid } from 'nanoid';
const modalQuestion = 'Are you sure?';
// Mikhaylo Pobochikh

export const OperationList = ({ sortedTransactions }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const dispatch = useDispatch();

  const onHandleClick = () => {
    // console.log('Click Delete on id', selectedId);
    dispatch(deleteTransaction(selectedId));
  };
  const clickButton = id => {
    setSelectedId(id);
    setShowModal(true);
  };

  return (
    <>
      <SC.List>
        {sortedTransactions.map(el => {
          const expenses = el.transactionsType === 'expenses';
          const newSum = `${Number(el.sum).toFixed(2).padStart(5, 0)} UAH.`;
          // console.log('el._id', el._id);

          return (
            <SC.OperationListWrapper key={el._id}>
              <SC.OperationListDiv>
                <SC.OperationListTitle>{el.description}</SC.OperationListTitle>
                <SC.OperationListDivDate>
                  <SC.OperationListDateTitle>
                    {moment(el.date).format('DD.MM.YYYY')}
                  </SC.OperationListDateTitle>
                  <SC.OperationListDateTitle>
                    {el.category}
                  </SC.OperationListDateTitle>
                </SC.OperationListDivDate>
              </SC.OperationListDiv>
              <SC.OperationListDivBalance>
                {expenses ? (
                  <SC.OperationListDivBalanceTextMinus>{`- ${newSum}`}</SC.OperationListDivBalanceTextMinus>
                ) : (
                  <SC.OperationListDivBalanceText>{` ${newSum}`}</SC.OperationListDivBalanceText>
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
          );
        })}
        <SC.OperationListWrapper key={nanoid()} />
        <SC.OperationListWrapper key={nanoid()} />
      </SC.List>

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
