import styled from 'styled-components';
import { ReactComponent as Calendar } from '../../images/Calendar.svg';

export const DataContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CalendarIcon = styled(Calendar)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  @media screen and (min-width: 1280px) {
    margin-right: 14px;
  }
`;

export const CurrentData = styled.p`
  margin-right: 44px;
  font-family: Roboto, sans-serif;
  font-style: regular;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  color: #52555f;
  @media screen and (min-width: 1280px) {
    margin-right: 32px;
  }
`;
