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

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const BackspaceWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  text-transform: uppercase;
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
`;
