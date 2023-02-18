import {
  TopWrapper,
  Box,
  BtnList,
  BtnLink,
  BtnItem,
  BtnWrapper,
  BackspaceVectorIcon,
  FilterWrapper,
  SelectField,
  InputField,
  FormBox,
  FormInputWrapper,
  SecondaryInputWrapper,
  CalculatorIcon,
  TextSecondary,
  BtnSubmitList,
  BtnSubmitItem,
  BtnSubmit,
  BtnSecondary,
  TopBalanceWrapper,
} from './MainHome.styled';
import { MainWrapper } from '../MainWrapper/MainWrapper';
import { Formik } from 'formik';

export const MainHome = () => {
  return (
    <MainWrapper>
      {/* <TopBalanceWrapper> 

        //тут рендеримо обгорнутий у дів баланс і рендеримо увесь компонент TopBalanceWrapper за необхідності// 

      </TopBalanceWrapper> 
       */}

      <TopWrapper />
      <Box>
        <BackspaceVectorIcon />
        <FilterWrapper>
          <Formik
            onSubmit={values => {
              console.log(values);
            }}
            initialValues={{
              category: '',
              description: '',
            }}
          >
            <FormBox>
              <FormInputWrapper>
                <InputField
                  as="input"
                  type="text"
                  name="description"
                  placeholder="Product description"
                />
                <SelectField
                  as="select"
                  name="category"
                  placeholder="Product category"
                  label="Product category"
                >
                  <option
                    label="Product category"
                    placeholder="Product category"
                  ></option>
                  <option value="transport">Transport</option>
                  <option value="products">Products</option>
                  <option value="health">Health</option>
                  <option value="alcohol">Alcohol</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="housing">Housing</option>
                  <option value="technique">Technique</option>
                  <option value="communal, communication">
                    Communal, communication
                  </option>
                  <option value="sports">Sports</option>
                  <option value="hobbies">Hobbies</option>
                  <option value="others">Others</option>
                </SelectField>
              </FormInputWrapper>
              <SecondaryInputWrapper>
                <TextSecondary>00.00 UAH</TextSecondary>
                <CalculatorIcon />
              </SecondaryInputWrapper>
              <BtnSubmitList>
                <BtnSubmitItem>
                  <BtnSubmit type="submit">Submit</BtnSubmit>
                </BtnSubmitItem>
                <BtnSubmitItem>
                  <BtnSecondary type="button">Clear</BtnSecondary>
                </BtnSubmitItem>
              </BtnSubmitList>
            </FormBox>
          </Formik>
        </FilterWrapper>
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
      </Box>
    </MainWrapper>
  );
};
