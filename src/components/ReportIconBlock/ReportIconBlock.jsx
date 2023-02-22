import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllTransactionsReport } from 'redux/transaction/transactionSelectors';

import sprite from '../../images/icon.svg';
import expenseIconCategories from './data/expenseIcon.json';
import incomeIconCategories from './data/incomeIcon.json';

import {
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
  const [category, setCategory] = useState('');
  const [type, setType] = useState('expense');

  console.log('category', category);
  // тут  мені потрібен селектор який дає інфу по транзакціям за місяць ⬇️⬇️⬇️⬇️
  const transaction = useSelector(selectAllTransactionsReport);
  // ⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️

  // отримую відфільтровані транзакції по типу (витрати чи доходи)
  //   const getTransactionByType = type => {
  //     const filteredByType = transaction.filter(
  //       transaction => transaction.type === type
  //     );
  //     return filteredByType;
  //   };
  // отримую загальну суму по категорії (витрат або доходів)
  //   const findTotalSumByCategory = (type, category) => {
  //     let totalExpense = 0;
  //     getTransactionByType(type)
  //       .filter(tr => tr.category === category)
  //       .map(el => (totalExpense += el.sum));
  //     return totalExpense;
  //   };

  const onHandleChangeType = () => {
    if (type === 'expense') {
      setType('income');
      setCategory('');
    }
    if (type === 'income') {
      setType('expense');
      setCategory('');
    }
  };
  const getCategory = e => {
    setCategory(e.target.attributes.title.nodeValue);
  };

  const categories =
    type === 'expense' ? expenseIconCategories : incomeIconCategories;

  return (
    <ReportWrapper>
      <TransactionWrapper>
        <ArrowСhangeMonth viewBox="0 0 7 12" onClick={onHandleChangeType}>
          <path d="M6 1L2 6L6 11" stroke="#FF751D" />
        </ArrowСhangeMonth>
        {type === 'expense' ? (
          <ReportTitle>Expenses</ReportTitle>
        ) : (
          <ReportTitle>Income</ReportTitle>
        )}
        <ArrowСhangeMonth viewBox="0 0 7 12" onClick={onHandleChangeType}>
          <path d="M1 1L5 6L1 11" stroke="#FF751D" width="4" height="10" />
        </ArrowСhangeMonth>
      </TransactionWrapper>
      <ReportList>
        {/* Тут треба перевіряти чи масив транзакцій не дорівнює 0⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️*/}
        {transaction.balance === 0 ? (
          <p>
            Отчет будет доступен после того как вы внесете данные о своих
            доходах и расходах за выбранный период.
          </p>
        ) : (
          categories.map(event => {
            // let sum = findTotalSumByCategory(type, event.label);
            // if (sum === 0) {
            //   return null;
            // }

            return (
              <ReportCard key={event.id}>
                <p>100.00</p>
                <IconSvg title={event.label} onClick={getCategory}>
                  <use
                    xlinkHref={`${sprite}#${event.label}`}
                    title={event.label}
                  />
                </IconSvg>
                <ReportCardTitle>test</ReportCardTitle>
              </ReportCard>
            );
          })
        )}
      </ReportList>
    </ReportWrapper>
  );
};
