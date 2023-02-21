import { CalendarIcon, CurrentData, DataContent } from './DataBox.styled';
export const DataBox = ({ date }) => {
  return (
    <DataContent>
      <CalendarIcon />
      <CurrentData>{date}</CurrentData>
    </DataContent>
  );
};
