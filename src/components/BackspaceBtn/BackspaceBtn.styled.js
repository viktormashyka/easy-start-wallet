import styled from 'styled-components';
import { ReactComponent as BackspaceIcon } from '../../images/KeyboardBackspace.svg';

export const BackspaceVectorIcon = styled(BackspaceIcon)`
  display: inline-flex;
  width: 20px;
  height: 20px;
  margin-right: 3px;
  &:hover {
    fill: #ffffff;
  }
`;

export const BackButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 0.02em;
  :hover {
    color: #ff751d;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
