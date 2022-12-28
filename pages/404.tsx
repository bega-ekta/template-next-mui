import SEO from 'components/UI/SEO';
import NotFoundScreen from 'screens/not-found/NotFoundScreen';

const NotFound = () => {
  return (
    <>
      <SEO title="404 - Not Found" />
      <NotFoundScreen />
    </>
  );
};

export default NotFound;
