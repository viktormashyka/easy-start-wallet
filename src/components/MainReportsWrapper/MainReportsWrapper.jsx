import { MainWrapper } from 'components/MainWrapper/MainWrapper';
import { TopRectangle, BCGLogoBottom } from './MainReportsWrapper.styles';

export const MainReportsWrapper = ({ children }) => {
  return (
    <MainWrapper>
      <TopRectangle />
      <BCGLogoBottom />
      {children}
    </MainWrapper>
  );
};
