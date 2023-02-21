import * as Yup from 'yup';
import moment from 'moment';
import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../../redux/transaction/transactionOperations';
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
  ErrorNotification,
  ErrorMessageWrapper,
} from './IncomeForm.styled';

const options = [
  { value: 'Salary', label: 'Salary' },
  { value: 'Add.Income', label: 'Add.Income' },
];

const initialValues = {
  category: '',
  description: '',
  sum: '',
};

const schema = Yup.object().shape({
  category: Yup.string().required('Select category'),
  description: Yup.string().min(3).max(16).required('Enter income description'),
  sum: Yup.number('Invalid sum, only numbers').required('Enter sum'),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorNotification>{message}</ErrorNotification>}
    />
  );
};

export const IncomeForm = () => {
  const dispatch = useDispatch();

  const date = moment().format('DD.MM.YYYY');

  // const getFormData = values => {
  //   console.log('getFormData::', values);
  // };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          dispatch(
            addTransaction({
              ...values,
              transactionsType: 'income',
              date,
            })
          );
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          resetForm,
        }) => {
          // getFormData(values);
          return (
            <FormBox onSubmit={handleSubmit}>
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
                      onChange={handleChange}
                      value={values.description}
                    />
                    <CustomSelect
                      name="category"
                      options={options}
                      value={values.category}
                      type="Category"
                      disabled={isSubmitting}
                      isLoading={isSubmitting}
                      onChange={values =>
                        setFieldValue('category', values.value)
                      }
                    ></CustomSelect>
                  </FormInputWrapper>
                  <SecondaryInputWrapper>
                    <div>
                      <TextSecondary
                        as="input"
                        type="text"
                        id="sum"
                        name="sum"
                        pattern="^(([0-9]*)|(([0-9]*)\.([0-9]*)))$"
                        title="Вalance must be whole numbers (or decimal numbers)"
                        placeholder="00.00 UAH"
                        onChange={handleChange}
                        value={values.sum}
                      />
                      <ErrorMessageWrapper>
                        {errors.description && touched.description ? (
                          <FormError name="description" component="p" />
                        ) : errors.category && touched.category ? (
                          <FormError name="category" component="p" />
                        ) : errors.sum && touched.sum ? (
                          <FormError name="sum" component="p" />
                        ) : null}
                      </ErrorMessageWrapper>
                    </div>
                    <IconWrapper>
                      <CalculatorIcon />
                    </IconWrapper>
                  </SecondaryInputWrapper>
                </InputsBox>
              </FormTopWrapper>
              <BtnSubmitList>
                <BtnSubmitItem>
                  <BtnSubmit type="submit" disabled={isSubmitting}>
                    Input
                  </BtnSubmit>
                </BtnSubmitItem>
                <BtnSubmitItem>
                  <BtnSecondary
                    type="reset"
                    onClick={resetForm}
                    disabled={isSubmitting}
                  >
                    Clear
                  </BtnSecondary>
                </BtnSubmitItem>
              </BtnSubmitList>
            </FormBox>
          );
        }}
      </Formik>
    </>
  );
};
