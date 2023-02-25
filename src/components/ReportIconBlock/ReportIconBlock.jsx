import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllTransactionsReport } from 'redux/transaction/transactionSelectors';

import sprite from '../../images/icon.svg';
import { nanoid } from 'nanoid/non-secure';
import {
  Container,
  ReportWrapper,
  TransactionWrapper,
  ArrowСhangeMonth,
  ReportList,
  ReportTitle,
  ReportCard,
  IconSvg,
  ReportCardTitle,
  Notificate,
} from './ReportIconBlock.styled';

export const ReportIconBlock = () => {
  // eslint-disable-next-line no-unused-vars
  const [category, setCategory] = useState('');
  const [type, setType] = useState('expenses');
  const report = useSelector(selectAllTransactionsReport);
  const transaction = report.filterTransactions;

  const getCategory = e => {
    setCategory(e.target.attributes.title.nodeValue);
  };

  const getTransactionByType = type => {
    if (transaction) {
      const filteredByType = transaction.filter(
        transaction => transaction.transactionsType === type
      );
      // console.log('filteredByType', filteredByType);
      return filteredByType;
    }
  };

  const filterObjByTypeAndCategory = () => {
    if (!getTransactionByType(type)) return;

    const result = getTransactionByType(type).reduce((acc, obj) => {
      if (!acc[obj.category]) {
        acc[obj.category] = { category: obj.category, sum: 0 };
      }
      acc[obj.category].sum += obj.sum;

      return acc;
    }, {});
    return Object.values(result).sort((a, b) => b.sum - a.sum);
  };

  const onHandleChangeType = () => {
    if (type === 'expenses') {
      setType('income');
      setCategory('');
    }
    if (type === 'income') {
      setType('expenses');
      setCategory('');
    }
  };

  return (
    <Container>
      <ReportWrapper>
        <TransactionWrapper>
          <ArrowСhangeMonth viewBox="0 0 7 12" onClick={onHandleChangeType}>
            <path d="M6 1L2 6L6 11" stroke="#FF751D" />
          </ArrowСhangeMonth>
          {type === 'expenses' ? (
            <ReportTitle>Expenses</ReportTitle>
          ) : (
            <ReportTitle>Income</ReportTitle>
          )}
          <ArrowСhangeMonth viewBox="0 0 7 12" onClick={onHandleChangeType}>
            <path d="M1 1L5 6L1 11" stroke="#FF751D" width="4" height="10" />
          </ArrowСhangeMonth>
        </TransactionWrapper>
        <ReportList>
          {!getTransactionByType(type) ||
          getTransactionByType(type).length === 0 ? (
            <li>
              <Notificate>
                The report will be available after you enter data on your income
                and expenses for the selected period.
              </Notificate>
            </li>
          ) : (
            filterObjByTypeAndCategory().map(array => {
              const id = nanoid();
              return (
                <ReportCard key={id}>
                  <p>{`${array.sum.toLocaleString('ru')}.00`}</p>
                  <IconSvg title={array.category} onClick={getCategory}>
                    <use
                      xlinkHref={`${sprite}#${array.category}`}
                      title={array.category}
                    />
                  </IconSvg>
                  <ReportCardTitle>{array.category}</ReportCardTitle>
                </ReportCard>
              );
            })
          )}
        </ReportList>
      </ReportWrapper>
    </Container>
  );
};
