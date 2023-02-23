import moment from 'moment';
import { CalendarIcon, CurrentData, DataContent } from './DataBox.styled';
export const DataBox = ({ date }) => {
  const currentDate = moment().format('DD.MM.YYYY');
  return (
    <DataContent>
      <CalendarIcon />
      <CurrentData>{date ? date : currentDate}</CurrentData>
    </DataContent>
  );
};
