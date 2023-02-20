import moment from 'moment';
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
  IconWrapper,
} from './IncomeForm.styled';

const options = [
  { value: 'salary', label: 'Salary' },
  { value: 'add income', label: 'Add income' },
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

export const IncomeForm = () => {
  const date = moment().format('DD.MM.YYYY');
  const formik = useFormik({
    initialValues: {
      category: '',
      description: '',
      sum: '',
    },
    validate,
    onSubmit: value => {
      console.log({
        ...value,
        transactionsType: 'income',
        date,
      });
    },
  });

  return (
    <Formik>
      <FormBox onSubmit={formik.handleSubmit}>
        <FormTopWrapper>
          <DataBox>
            <CalendarIcon />
            <CurrentData>{date}</CurrentData>
          </DataBox>
          <InputsBox>
            <FormInputWrapper>
              <InputField
                as="input"
                type="text"
                id="description"
                name="description"
                placeholder="Description"
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
                type="Category"
                onChange={value =>
                  formik.setFieldValue('category', value.value)
                }
              ></CustomSelect>
              {/* {formik.errors.category ? <div>{formik.errors.category}</div> : null} */}
            </FormInputWrapper>
            <SecondaryInputWrapper>
              <div>
                <TextSecondary
                  as="input"
                  type="text"
                  id="sum"
                  name="sum"
                  placeholder="00.00 UAH"
                  onChange={formik.handleChange}
                  values={formik.values.sum}
                />
                {/* <AdditionalInputTag>UAH</AdditionalInputTag> */}
              </div>
              <IconWrapper>
                <CalculatorIcon />
              </IconWrapper>
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
