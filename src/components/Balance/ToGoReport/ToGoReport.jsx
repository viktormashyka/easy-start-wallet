import { GoReport } from './ToGoReport.styled';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ToGoReport = () => {
  const StyledLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: inherit;

    @media screen and (min-width: 768px) {
      display: flex;

      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.04em;

      color: #52555f;
      cursor: pointer;
    }
  `;
  return (
    <GoReport>
      <StyledLink to="/report">
        <p style={{ marginRight: 20 }}>Reports</p>
        <svg
          width="14"
          height="14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 4.2h3V14H0V4.2ZM5.6 0h2.8v14H5.6V0Zm5.6 8H14v6h-2.8V8Z"
            fill="#52555F"
          />
        </svg>
      </StyledLink>
    </GoReport>
  );
};

export default ToGoReport;
