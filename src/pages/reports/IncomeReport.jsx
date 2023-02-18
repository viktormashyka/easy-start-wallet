import { Helmet } from 'react-helmet';
import { IncomeReportForm } from 'components/IncomeReportForm/IncomeReportForm';

export default function IncomeReport() {
  return (
    <div>
      <Helmet>
        <title>Income Report page</title>
      </Helmet>
      <IncomeReportForm />
    </div>
  );
}
