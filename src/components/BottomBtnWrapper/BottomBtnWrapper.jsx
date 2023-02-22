import { BtnList, BtnLink, BtnItem } from './BottomBtnWrapper.styled';

export function BottomBtnWrapper() {
  return (
    <>
      <BtnList>
        <BtnItem>
          <BtnLink>Expenses</BtnLink>
        </BtnItem>
        <BtnItem>
          <BtnLink>Income</BtnLink>
        </BtnItem>
      </BtnList>
    </>
  );
}
