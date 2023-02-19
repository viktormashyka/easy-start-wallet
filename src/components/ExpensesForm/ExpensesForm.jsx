import { Formik, useFormik } from 'formik';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import {
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
  InputsBox,
  FormTopWrapper,
  CalendarIcon,
  CurrentData,
  DataBox,
} from './ExpensesForm.styled';

const options = [
  { value: 'transport', label: 'Transport' },
  { value: 'products', label: 'Products' },
  { value: 'health', label: 'Health' },
  { value: 'alcohol', label: 'Alcohol' },
  { value: 'entertainment', label: 'Entertainment' },
  { value: 'housing', label: 'Housing' },
  { value: 'technique', label: 'Technique' },
  { value: 'communal, communication', label: 'Communal, communication' },
  { value: 'sports', label: 'Sports' },
  { value: 'hobbies', label: 'Hobbies' },
  { value: 'others', label: 'Others' },
];

const validate = values => {
  const errors = {};
  if (!values.description) {
    errors.description = 'Description is required';
  }
  if (!values.category) {
    errors.category = 'Category is required';
  }
  return errors;
};

export const ExpensesForm = () => {
  const formik = useFormik({
    initialValues: {
      category: '',
      description: '',
      amount: '',
    },
    validate,
    onSubmit: value => {
      console.log({ ...value, type: 'expenses' });
    },
  });

  return (
    <Formik>
      <FormBox onSubmit={formik.handleSubmit}>
        <FormTopWrapper>
          <DataBox>
            <CalendarIcon />
            <CurrentData>20.02.2023</CurrentData>
          </DataBox>
          <InputsBox>
            <FormInputWrapper>
              <InputField
                as="input"
                type="text"
                id="description"
                name="description"
                placeholder="Product description"
                onChange={formik.handleChange}
                values={formik.values.description}
                required
              />
              {/* {formik.errors.description ? (
            <div>{formik.errors.description}</div>
          ) : null} */}
              <CustomSelect
                options={options}
                value={formik.values.category}
                type="Product category"
                onChange={value =>
                  formik.setFieldValue('category', value.value)
                }
              ></CustomSelect>
              {/* {formik.errors.category ? <div>{formik.errors.category}</div> : null} */}
            </FormInputWrapper>
            <SecondaryInputWrapper>
              <TextSecondary
                as="input"
                type="text"
                id="amount"
                name="amount"
                placeholder="00.00 UAH"
                onChange={formik.handleChange}
                values={formik.values.amount}
              />
              <CalculatorIcon />
            </SecondaryInputWrapper>
          </InputsBox>
        </FormTopWrapper>
        <BtnSubmitList>
          <BtnSubmitItem>
            <BtnSubmit type="submit">Input</BtnSubmit>
          </BtnSubmitItem>
          <BtnSubmitItem>
            <BtnSecondary type="button">Clear</BtnSecondary>
          </BtnSubmitItem>
        </BtnSubmitList>
      </FormBox>
    </Formik>
  );
};
