import { Container } from './ReportCharts.styled.js';
import useScreenResizing from '../../hooks/useScreenResizing.js';
import { ChartsDesktopTablet } from './ChartsDesktopTablet.jsx';
import { ChartsMobile } from './ChartsMobile.jsx';

export const ReportCharts = ({ data, category }) => {
  const viewPort = useScreenResizing();
  const filterData = data.filter(item => item.category === category);
  return (
    <Container>
      {viewPort.width > 767 ? (
        <ChartsDesktopTablet data={filterData} />
      ) : (
        <ChartsMobile data={filterData} />
      )}
    </Container>
  );
};
