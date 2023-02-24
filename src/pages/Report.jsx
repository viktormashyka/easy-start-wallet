import { ReportsTopWrapper } from 'components/ReportsTopWrapper/ReportsTopWrapper';
import { Helmet } from 'react-helmet';
import { ReportIconBlock } from '../components/ReportIconBlock/ReportIconBlock';
import { Outlet } from 'react-router-dom/dist';
import { InOutSummary } from 'components/InOutSummary/InOutSummary';

export default function Report() {
  return (
    <div>
      <Helmet>
        <title>Report page</title>
      </Helmet>
      <>This is Report page</>
      <ReportsTopWrapper />
      <InOutSummary />
      <Outlet />
      <ReportIconBlock />
    </div>
  );
}
