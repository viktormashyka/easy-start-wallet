import { Helmet } from 'react-helmet';
import { ExpensesReportForm } from 'components/ExpensesReportForm/ExpensesReportForm';

export default function ExpensesReport() {
  return (
    <div>
      <Helmet>
        <title>Expenses Report page</title>
      </Helmet>
      <ExpensesReportForm />
    </div>
  );
}
