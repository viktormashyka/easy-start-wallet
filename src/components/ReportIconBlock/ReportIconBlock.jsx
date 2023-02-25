import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllTransactionsReport } from 'redux/transaction/transactionSelectors';

import sprite from '../../images/icon.svg';
// import expenseIconCategories from './data/expenseIcon.json';
// import incomeIconCategories from './data/incomeIcon.json';
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
} from './ReportIconBlock.styled';

export const ReportIconBlock = () => {
  // eslint-disable-next-line no-unused-vars
  const [category, setCategory] = useState('');
  const [type, setType] = useState('expenses');
  const report = useSelector(selectAllTransactionsReport);
  const transaction = report.filterTransactions;
  // const { category, date, description, sum, transactionsType, _id } =
  //   transaction;

  // const categories =
  //   type === 'expenses' ? expenseIconCategories : incomeIconCategories;

  const getCategory = e => {
    setCategory(e.target.attributes.title.nodeValue);
  };

  const getTransactionByType = type => {
    if (transaction) {
      const filteredByType = transaction.filter(
        transaction => transaction.transactionsType === type
      );
      console.log('filteredByType', filteredByType);
      return filteredByType;
    }
  };

  // eslint-disable-next-line no-unused-vars
  // const categoryLabel = categories.map(el => el.label);

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

  // const arrays = filterObjByTypeAndCategory();

  // const findTotalSumByCategory = (type, categoryLabel) => {
  //   let totalExpense = 0;
  //   getTransactionByType(type)
  //     .filter(tr => tr.category === categoryLabel)
  //     .map(el => (totalExpense += el.sum));
  //   return totalExpense;
  // };

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

  //   const SortTrBySum = (type, categoryLabel) => {
  //     return getTransactionByType(type)
  //       .filter(tr => tr.category === categoryLabel)
  //       .sort((first, second) => second.sum - first.sum);
  //   };

  //   console.log('SortTrBySum', SortTrBySum());
  //   //   const label = categories.map(cat => cat.label);
  //   const id = categories.map(cat => cat.id);
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
          {!getTransactionByType(type) ? (
            <p>
              Отчет будет доступен после того как вы внесете данные о своих
              доходах и расходах за выбранный период.
            </p>
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
            // categories.map(event => {
            //   let sum = findTotalSumByCategory(type, event.label);
            //   if (sum === 0) {
            //     return null;
            //   }

            //   return (
            //     <ReportCard key={event.id}>
            //       <p>{`${sum.toLocaleString('ru')}.00`}</p>
            //       <IconSvg title={event.label} onClick={getCategory}>
            //         <use
            //           xlinkHref={`${sprite}#${event.label}`}
            //           title={event.label}
            //         />
            //       </IconSvg>
            //       <ReportCardTitle>{event.label}</ReportCardTitle>
            //     </ReportCard>
            //   );
            // })
          )}
        </ReportList>
      </ReportWrapper>
    </Container>
  );
};
