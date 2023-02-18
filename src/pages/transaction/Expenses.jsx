import { Helmet } from 'react-helmet';
import { ExpensesForm } from 'components/ExpensesForm/ExpensesForm';

export default function Expenses() {
  return (
    <div>
      <Helmet>
        <title>Expenses page</title>
      </Helmet>
      <ExpensesForm />
    </div>
  );
}
