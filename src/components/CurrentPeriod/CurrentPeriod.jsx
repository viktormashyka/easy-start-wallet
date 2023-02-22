import {
  DateContainer,
  Title,
  DateWrapper,
  ArrowButton,
  Date,
} from './CurrentPeriod.styled';
import { ReactComponent as LeftArrowIcon } from '../../images/date-period-left-arrow.svg';
import { ReactComponent as RightArrowIcon } from '../../images/date-period-right-arrow.svg';

export const CurrentPeriod = () => {
  return (
    <DateContainer>
      <Title>Current period:</Title>
      <DateWrapper>
        <ArrowButton>
          <LeftArrowIcon />
        </ArrowButton>
        <Date>NOVEMBER 2019</Date>
        <ArrowButton>
          <RightArrowIcon />
        </ArrowButton>
      </DateWrapper>
    </DateContainer>
  );
};
