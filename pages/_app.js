import { Fragment } from 'react';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} />
      <Toaster />
    </Fragment>
  );
}

export default MyApp;
