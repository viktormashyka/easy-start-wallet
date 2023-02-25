import {
  DateContainer,
  Title,
  DateWrapper,
  ArrowButton,
  DateMonthAndYear,
} from './CurrentPeriod.styled';
import { ReactComponent as LeftArrowIcon } from '../../images/date-period-left-arrow.svg';
import { ReactComponent as RightArrowIcon } from '../../images/date-period-right-arrow.svg';
import { getAllTransactionsReport } from 'redux/transaction/transactionOperations';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

export const CurrentPeriod = () => {
  const dispatch = useDispatch();
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2023);
  const [monthName, setMonthName] = useState(null);

  useEffect(() => {
    const date = new Date(year, month - 1);
    const monthName = date.toLocaleString('en-US', { month: 'long' });
    setMonthName(monthName.toUpperCase());

    if (month < 1) {
      setMonth(12);
      setYear(year - 1);
    }

    if (month > 12) {
      setMonth(1);
      setYear(year + 1);
    }

    dispatch(getAllTransactionsReport({ month, year }));
  }, [dispatch, month, year]);

  return (
    <DateContainer>
      <Title>Current period:</Title>
      <DateWrapper>
        <ArrowButton type="button" onClick={() => setMonth(month - 1)}>
          <LeftArrowIcon />
        </ArrowButton>
        <DateMonthAndYear>
          {monthName} {year}
        </DateMonthAndYear>
        <ArrowButton type="button" onClick={() => setMonth(month + 1)}>
          <RightArrowIcon />
        </ArrowButton>
      </DateWrapper>
    </DateContainer>
  );
};
