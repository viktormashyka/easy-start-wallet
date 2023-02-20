import {
  BtnList,
  BtnLink,
  BtnItem,
  BtnWrapper,
} from './BottomBtnWrapper.styled';

export function BottomBtnWrapper() {
  return (
    <>
      <BtnWrapper>
        <BtnList>
          <BtnItem>
            <BtnLink>Expenses</BtnLink>
          </BtnItem>
          <BtnItem>
            <BtnLink>Income</BtnLink>
          </BtnItem>
        </BtnList>
      </BtnWrapper>
    </>
  );
}
