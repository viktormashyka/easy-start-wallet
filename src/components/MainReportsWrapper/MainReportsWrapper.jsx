import { TopRectangle, BCGLogoBottom } from './MainReportsWrapper.styles';

export const MainReportsWrapper = ({ children }) => {
  return (
    <>
      <TopRectangle />
      <BCGLogoBottom />
      {children}
    </>
  );
};
