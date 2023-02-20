import {
  TopBalanceWrapper,
  BtnList,
  BtnLink,
  BtnItem,
  BtnWrapper,
} from './MainBalanceWrapper.styled';
import { MainWrapper } from './MainBalanceWrapper.styled';

export const MainHomeBalanceWrapper = () => {
  return (
    <MainWrapper>
      <TopBalanceWrapper>
        {/* //тут рендеримо обгорнутий у дів баланс і рендеримо увесь компонент TopBalanceWrapper за необхідності//  */}
      </TopBalanceWrapper>
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
    </MainWrapper>
  );
};
