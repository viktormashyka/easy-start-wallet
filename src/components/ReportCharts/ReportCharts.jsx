import { Container } from './ReportCharts.styled.js';
import useScreenResizing from '../../hooks/useScreenResizing.js';
import { ChartsDesktopTablet } from './ChartsDesktopTablet.jsx';
import { ChartsMobile } from './ChartsMobile.jsx';

export const ReportCharts = ({ data, category }) => {
  const viewPort = useScreenResizing();
  const filterData = data.filter(item => item.category === category);
  let dataWithioutDouble = filterData.reduce((accumulator, current) => {
    const existing = accumulator.find(
      item =>
        item.description.toUpperCase() === current.description.toUpperCase()
    );
    if (existing) {
      existing.sum += current.sum;
    } else {
      accumulator.push({ ...current });
    }
    return accumulator;
  }, []);
  return (
    <Container>
      {viewPort.width >= 768 ? (
        <ChartsDesktopTablet data={dataWithioutDouble} />
      ) : (
        <ChartsMobile data={dataWithioutDouble} />
      )}
    </Container>
  );
};
