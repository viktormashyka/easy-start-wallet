import { MainWrapper } from '../MainWrapper/MainWrapper';
import {
  HeroWrapper,
  HeroTitle,
  BottomWrapper,
  HeroTitleBox,
  HeroText,
  FormWrapper,
} from './Main.styled';

export const Main = ({ children }) => {
  return (
    <MainWrapper>
      <HeroWrapper>
        <HeroTitleBox>
          <HeroTitle>Kapu$ta</HeroTitle>
          <HeroText>Smart finance</HeroText>
        </HeroTitleBox>
      </HeroWrapper>
      <FormWrapper>
        {children}
        {/* сюди рендеримо форму логінізації і реєстрації */}
      </FormWrapper>
      <BottomWrapper />
    </MainWrapper>
  );
};
