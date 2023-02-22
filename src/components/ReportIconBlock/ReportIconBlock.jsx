import React from 'react';
// import { useSelector } from 'react-redux';

// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

// import s from './Report.module.css';

// import Balance from '../Balance';
// import { getTransactionsPerMonth } from 'redux/transactions/transactions-selectors';
// import { CurrentAmount, CurrentMonth } from './';
// import expenseIconCategories from 'data/expenseIcon';
// import incomeIconCategories from 'data/incomeIcon';
// import sprite from './icon.svg';
// import ArrowToGoBack from '../ArrowToGoBack';

import {
  ReportWrapper,
  TransactionWrapper,
  ArrowСhangeMonth,
  ReportList,
  ReportTitle,
  //   ReportCard,
} from './ReportIconBlock.styled';
export const ReportIconBlock = () =>
  //     {
  //   month,
  //   year,
  //   type,
  //   onHandleClickRight,
  //   onHandleClickLeft,
  //   getCategory,
  //   onHandleChangeType,
  //     }
  {
    //   const transaction = useSelector(getTransactionsPerMonth);

    //   const getTransactionByType = type => {
    //     const filteredByType = transaction.filter(
    //       transaction => transaction.type === type
    //     );
    //     return filteredByType;
    //   };

    //   const findTotalSumByCategory = (type, category) => {
    //     let totalExpense = 0;
    //     getTransactionByType(type)
    //       .filter(tr => tr.category === category)
    //       .map(el => (totalExpense += el.sum));
    //     return totalExpense;
    //   };

    //   const categories =
    //     type === 'expense' ? expenseIconCategories : incomeIconCategories;

    return (
      <ReportWrapper>
        <TransactionWrapper>
          <ArrowСhangeMonth viewBox="0 0 7 12">
            <path d="M6 1L2 6L6 11" stroke="#FF751D" />
          </ArrowСhangeMonth>
          {/* {type === 'expense' ? ( */}
          <ReportTitle>Expenses</ReportTitle>
          {/* //   ) : ( */}
          <ReportTitle>Income</ReportTitle>
          {/* )} */}
          <ArrowСhangeMonth viewBox="0 0 7 12">
            <path d="M1 1L5 6L1 11" stroke="#FF751D" width="4" height="10" />
          </ArrowСhangeMonth>
        </TransactionWrapper>
        <ReportList>
          {/* {getTransactionByType(type).length === 0 ? ( */}
          <p>
            Отчет будет доступен после того как вы внесете данные о своих
            доходах и расходах за выбранный период.
          </p>
          {/* ) : ( */}
          {/* categories.map(event => {
              let sum = findTotalSumByCategory(type, event.label);
              if (sum === 0) {
                return null;
              } */}
          return (
          {/* <ReportCard className={s.reportCard} key={event.id}>
            <p>{`${sum.toLocaleString('ru')}.00`}</p>
            <svg
              className={s.iconSvg}
              title={event.label}
              onClick={getCategory}
            >
              <use xlinkHref={`${sprite}#${event.label}`} title={event.label} />
            </svg>
            <p className={s.reportCardTitle}>{event.label}</p>
          </ReportCard> */}
          );
          {/* }) )} */}
        </ReportList>
      </ReportWrapper>
    );
  };
