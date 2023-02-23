import { ExpensesReportForm } from 'components/ExpensesReportForm/ExpensesReportForm';
import { IncomeReportForm } from 'components/IncomeReportForm/IncomeReportForm';
import { ReportsTopWrapper } from 'components/ReportsTopWrapper/ReportsTopWrapper';
import { Helmet } from 'react-helmet';
import { ReportIconBlock } from '../components/ReportIconBlock/ReportIconBlock';

export default function Report() {
  return (
    <div>
      <Helmet>
        <title>Report page</title>
      </Helmet>
      <>This is Report page</>
      <ReportsTopWrapper />
      <ExpensesReportForm />
      <IncomeReportForm />
      <ReportIconBlock />
    </div>
  );
}
