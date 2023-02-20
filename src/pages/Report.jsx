import { ExpensesReportForm } from 'components/ExpensesReportForm/ExpensesReportForm';
import { IncomeReportForm } from 'components/IncomeReportForm/IncomeReportForm';
import { Helmet } from 'react-helmet';

export default function Report() {
  return (
    <div>
      <Helmet>
        <title>Report page</title>
      </Helmet>
      <>This is Report page</>
      <ExpensesReportForm />
      <IncomeReportForm />
    </div>
  );
}
