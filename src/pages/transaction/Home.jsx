// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { selectIsLoading } from 'redux/contacts/selectors';

export default function Home() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Home page</title>
      </Helmet>
    </div>
  );
}
