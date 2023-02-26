import { ReportsTopWrapper } from 'components/ReportsTopWrapper/ReportsTopWrapper';
import { Helmet } from 'react-helmet';
import { ReportIconBlock } from '../components/ReportIconBlock/ReportIconBlock';
// import { Outlet } from 'react-router-dom/dist';
import { InOutSummary } from 'components/InOutSummary/InOutSummary';
import { MainReportsWrapper } from 'components/MainReportsWrapper/MainReportsWrapper';

export default function Report() {
  return (
    <>
      <Helmet>
        <title>Report page</title>
      </Helmet>
      <MainReportsWrapper>
        <ReportsTopWrapper />
        <InOutSummary />
        {/* <Outlet /> */}
        <ReportIconBlock />
      </MainReportsWrapper>
    </>
  );
}
