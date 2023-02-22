import { ArrowToGoHome } from 'components/ArrowToGoHome/ArrowToGoHome';
import Balance from 'components/Balance/Balance';
import { CurrentPeriod } from 'components/CurrentPeriod/CurrentPeriod';
import { Container, Wrapper } from './ReportsTopWrapper.styled';

export const ReportsTopWrapper = () => {
  return (
    <Container>
      <ArrowToGoHome />
      <Wrapper>
        <CurrentPeriod />
        <Balance />
      </Wrapper>
    </Container>
  );
};