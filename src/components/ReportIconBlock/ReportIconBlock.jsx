import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllTransactionsReport } from 'redux/transaction/transactionSelectors';
import { ReportCharts } from 'components/ReportCharts/ReportCharts';
import sprite from '../../images/icon.svg';

import { nanoid } from 'nanoid/non-secure';
import {
  Container,
  ReportWrapper,
  TransactionWrapper,
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
  const [category, setCategory] = useState('');
  const [type, setType] = useState('expenses');
  const report = useSelector(selectAllTransactionsReport);
  const transaction = report.filterTransactions;
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [defaultIndex, setDefaultIndex] = useState(0);
  let typeDataForCarts = [];

  const getTransactionByType = type => {
    if (transaction) {
      const filteredByType = transaction.filter(
        transaction => transaction.transactionsType === type
      );
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

  useEffect(() => {
    if (getTransactionByType(type) || filterObjByTypeAndCategory()) {
      const categoryFirstEl = filterObjByTypeAndCategory()
        .map(element => element.category)
        .splice(0, 1);
      setCategory(categoryFirstEl[0]);
      setDefaultIndex(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transaction, type]);

  const getCategory = e => {
    setCategory(e.target.attributes.title.nodeValue);
    setDefaultIndex(hoveredIndex);
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

  const handleHover = index => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <Container>
        <ReportWrapper>
          <TransactionWrapper>
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
              filterObjByTypeAndCategory().map((array, index) => {
                const id = nanoid();
                const style = {
                  fill:
                    hoveredIndex === index
                      ? '#ff751d'
                      : defaultIndex === index
                      ? '#ff751d'
                      : '#071f41',
                };
                return (
                  <ReportCard key={id}>
                    <p>{`${array.sum.toLocaleString('ru')}.00`}</p>
                    <IconSvg
                      title={array.category}
                      onMouseEnter={() => handleHover(index)}
                      onMouseLeave={handleLeave}
                      onClick={getCategory}
                      style={style}
                    >
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
