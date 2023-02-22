import { GoHomeBox, StyledLink, Title, Arrow } from './ArrowToGoHome.styled';
import useScreenResizing from '../../hooks/useScreenResizing';
import { useLocation} from 'react-router';

export const ArrowToGoHome = () => {
  const viewPort = useScreenResizing();
const location = useLocation();
  console.log(location.state);
  return (
    <GoHomeBox type="button">
      <StyledLink to={location.state?.from??"/home/expenses"}>
        <Arrow>
          <path
            d="M18 5H3.83l3.58-3.59L6 0 0 6l6 6 1.41-1.41L3.83 7H18V5Z"
            fill="#FF751D"
          />
        </Arrow>
        {viewPort.width > 767 && <Title>Main page</Title>}
      </StyledLink>
    </GoHomeBox>
  );
};
