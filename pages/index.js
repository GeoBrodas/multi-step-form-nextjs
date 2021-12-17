import Form from '@/components/Form';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Multi-Step form</title>
        <meta name="description" content="" />
      </Head>

      {/* Main div */}
      <div className="grid h-screen place-content-center">
        <Form />
      </div>
    </div>
  );
}
