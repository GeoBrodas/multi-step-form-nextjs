// import Footer from 'Layouts/Footer';
import { Fragment } from 'react';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} />
      <Toaster />
      {/* <Footer /> */}
    </Fragment>
  );
}

export default MyApp;
