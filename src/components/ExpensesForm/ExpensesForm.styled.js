import styled from 'styled-components';
// &:hover,
// &:focus {
//   box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12),
//     0px 4px 10px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
// }
import { ReactComponent as Calculator } from '../../images/Calculator.svg';
import { Field, Form } from 'formik';

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    margin-bottom: 60px;
  }
`;

export const FormTopWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 0px;
    margin-right: 32px;
  }
`;
export const DataWrapper = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const FormInputWrapper = styled.div`
  border: 2px solid #ffffff;
  border-bottom-right-radius: 12px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  margin-bottom: 32px;
  width: 280px;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0px;
    border: none;
    width: 100%;
  }
`;

export const InputsBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 2px solid #f5f6fb;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 16px;
  }
`;

export const InputField = styled(Field)`
  box-sizing: border-box;
  padding-left: 20px;
  width: 280px;
  height: 44px;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  border: none;
  background-color: transparent;
  font-family: Roboto, sans-serif;
  font-style: regular;
  font-size: 12px;
  line-height: 1.7;
  letter-spacing: 0.02em;
  color: #52555f;
  border: 2px solid #f5f6fb;
  ::placeholder {
    color: #c7ccdc;
    opacity: 1;
  }
  @media screen and (min-width: 768px) {
    width: 180px;
    border: none;
    border-top-right-radius: 0px;
    border-top-left-radius: 12px;
    border-right: 2px solid #f5f6fb;
  }
  @media screen and (min-width: 1280px) {
    width: 290px;
  }
`;

// Secondary input

export const SecondaryInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 22px;
  border: 2px solid #ffffff;
  margin-bottom: 80px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    /* width: 110px; */
    border: none;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-left: 2px solid #f5f6fb;
  }
`;

export const TextSecondary = styled(Field)`
  width: 125px;
  height: 44px;
  border: none;
  border-right: 2px solid #ffffff;
  border-top-left-radius: 22px;
  border-bottom-left-radius: 22px;
  text-align: center;
  background-color: transparent;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  line-height: 1.7;
  letter-spacing: 0.02em;
  color: #000000;
  ::placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: regular;
    font-weight: bold;
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: 0.02em;
    color: #000000;
    opacity: 1;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    width: 70px;
    border-left: 2px solid #f5f6fb;
    border-radius: 0px;
    ::placeholder {
      color: #c7ccdc;
      font-weight: normal;
      text-align: end;
      margin-right: 3px;
      text-align: end;
    }
  }
`;

export const CalculatorIcon = styled(Calculator)`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 44px;
  flex-shrink: 0;
  @media screen and (min-width: 768px) {
    width: 40px;
    margin-bottom: 0px;
    justify-content: start;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`;

// Buttons for Submit

export const BtnSubmitList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  @media screen and (min-width: 768px) {
    width: auto;
  }
`;

export const BtnSubmitItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 23px;
  border-radius: 16px;
  background-color: #f5f6fb;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1),
    color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: #ff751d;
    color: #ffffff;
  }
  @media screen and (min-width: 768px) {
    background-color: #ffffff;
    border: 2px solid #f5f6fb;
    :not(:last-child) {
      margin-right: 15px;
    }
  }
`;

export const BtnSubmit = styled.button`
  background-color: transparent;
  text-transform: uppercase;
  color: #52555f;
  width: 130px;
  padding-top: 15px;
  padding-bottom: 15px;
  box-shadow: 1px 2px 5px 0px rgba(170, 178, 197, 0.4);
  border-radius: 16px;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1),
    color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: #ff751d;
    color: #ffffff;
  }
  @media screen and (min-width: 768px) {
    width: 125px;
    box-shadow: none;
  }
  @media screen and (min-width: 1280px) {
    width: 136px;
  }
`;
export const BtnSecondary = styled.button`
  background-color: transparent;
  text-transform: uppercase;
  color: #52555f;
  width: 130px;
  padding-top: 15px;
  padding-bottom: 15px;
  box-shadow: 1px 2px 5px 0px rgba(170, 178, 197, 0.4);
  border-radius: 16px;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1),
    color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: #ff751d;
    color: #ffffff;
  }
  @media screen and (min-width: 768px) {
    width: 125px;
    box-shadow: none;
  }
  @media screen and (min-width: 1280px) {
    width: 136px;
  }
`;

export const ErrorNotification = styled.p`
  position: absolute;
  top: 3%;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  text-align: center;
  text-transform: uppercase;
  font-size: 13px;
  color: red;
  @media screen and (min-width: 768px) {
    top: 1%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const ErrorMessageWrapper = styled.div`
  display: block;
  text-align: center;
  text-transform: none;
  font-size: 15px;
`;
