import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllTransactionsReport } from 'redux/transaction/transactionSelectors';
import { ReportCharts } from 'components/ReportCharts/ReportCharts';
import sprite from '../../images/icon.svg';
import { nanoid } from 'nanoid/non-secure';
import {
  Container,
  ReportWrapper,
  TransactionWrapper,
  // ArrowСhangeMonth,
  ArrowСhangeMonthButton,
  ReportList,
  ReportTitle,
  ReportCard,
  IconSvg,
  ReportCardTitle,
  Notificate,
} from './ReportIconBlock.styled';
import { ReactComponent as LeftArrowIcon } from '../../images/date-period-left-arrow.svg';
import { ReactComponent as RightArrowIcon } from '../../images/date-period-right-arrow.svg';

export const ReportIconBlock = () => {
  // eslint-disable-next-line no-unused-vars
  const [category, setCategory] = useState('');
  const [type, setType] = useState('expenses');
  const report = useSelector(selectAllTransactionsReport);
  const transaction = report.filterTransactions;
  let typeDataForCarts = [];

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
    const filteredTransactions = getTransactionByType(type);
    if (!filteredTransactions) return;
    typeDataForCarts = filteredTransactions;
    const result = filteredTransactions.reduce((acc, obj) => {
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
    <>
      <Container>
        <ReportWrapper>
          <TransactionWrapper>
            {/* <ArrowСhangeMonth viewBox="0 0 7 12" onClick={onHandleChangeType}>
              <path d="M6 1L2 6L6 11" stroke="#FF751D" />
            </ArrowСhangeMonth> */}
            <ArrowСhangeMonthButton type="button" onClick={onHandleChangeType}>
              <LeftArrowIcon />
            </ArrowСhangeMonthButton>
            {type === 'expenses' ? (
              <ReportTitle>Expenses</ReportTitle>
            ) : (
              <ReportTitle>Income</ReportTitle>
            )}
            <ArrowСhangeMonthButton type="button" onClick={onHandleChangeType}>
              <RightArrowIcon />
            </ArrowСhangeMonthButton>
            {/* <ArrowСhangeMonth viewBox="0 0 7 12" onClick={onHandleChangeType}>
              <path d="M1 1L5 6L1 11" stroke="#FF751D" width="4" height="10" />
            </ArrowСhangeMonth> */}
          </TransactionWrapper>
          <ReportList>
            {!getTransactionByType(type) ||
            getTransactionByType(type).length === 0 ? (
              <li>
                <Notificate>
                  The report will be available after you enter data on your
                  income and expenses for the selected period.
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
                        onClick={() => setCategory(category)}
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
      <ReportCharts data={typeDataForCarts} category={category} />
    </>
  );
};
