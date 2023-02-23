import { BtnList, BtnLink, BtnItem } from './BottomBtnWrapper.styled';

export function BottomBtnWrapper() {
  return (
    <>
      <BtnList>
        <BtnItem>
          <BtnLink to="/home">Expenses</BtnLink>
        </BtnItem>
        <BtnItem>
          <BtnLink to="/home/income">Income</BtnLink>
        </BtnItem>
      </BtnList>
    </>
  );
}
