import StripeCheckoutPage from '@/components/steps/StripeCheckoutPage';
import Notification from '@/components/ui/Notification';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useState } from 'react';

function DonatePage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      setMessage('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      setMessage('Order canceled -- try again later');
    }
  }, []);

  return (
    <div className="grid h-screen place-content-center">
      <Head>
        <title>Donate | #TeamSeas</title>
        <meta name="description" content="Donate to #TeamSeas" />
      </Head>

      {/* notification component */}
      {message && <Notification message={message} />}

      <StripeCheckoutPage />
      <Link href="/">
        <a className="mx-auto text-gray-500 hover:underline text-lg">
          Head back to homepage
        </a>
      </Link>
    </div>
  );
}

export default DonatePage;
