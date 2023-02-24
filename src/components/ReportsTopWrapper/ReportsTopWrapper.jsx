import { ArrowToGoHome } from 'components/ArrowToGoHome/ArrowToGoHome';
import Balance from 'components/Balance/Balance';
import { CurrentPeriod } from 'components/CurrentPeriod/CurrentPeriod';
import { Container } from './ReportsTopWrapper.styled';
// import { Container, Wrapper } from './ReportsTopWrapper.styled';

export const ReportsTopWrapper = () => {
  return (
    <Container>
      <ArrowToGoHome />
      {/* <Wrapper> */}
      <Balance />
      <CurrentPeriod />
      {/* </Wrapper> */}
    </Container>
  );
};