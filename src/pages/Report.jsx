import { ExpensesReportForm } from 'components/ExpensesReportForm/ExpensesReportForm';
import { IncomeReportForm } from 'components/IncomeReportForm/IncomeReportForm';
import { ReportsTopWrapper } from 'components/ReportsTopWrapper/ReportsTopWrapper';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTransactionsReport } from 'redux/transaction/transactionOperations';
import { selectAllTransactionsReport } from 'redux/transaction/transactionSelectors';
import { ReportIconBlock } from '../components/ReportIconBlock/ReportIconBlock';

export default function Report() {
  const report = useSelector(selectAllTransactionsReport);
  console.log('🚀 ~ file: Report.jsx:9 ~ Report ~ report:', typeof report);
  const dispatch = useDispatch();
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2000);

  useEffect(() => {
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
    <div>
      <Helmet>
        <title>Report page</title>
      </Helmet>
      <>This is Report page</>
      <ReportsTopWrapper />
      <ExpensesReportForm />
      <IncomeReportForm />
      <button onClick={() => setMonth(month - 1)}>prev</button>
      <br />
      <button onClick={() => setMonth(month + 1)}>next</button>
      <ReportIconBlock />
    </div>
  );
}
