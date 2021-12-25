import Form from '@/components/Form';
import Wrapper from 'Layouts/Wrapper';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Multi-Step form</title>
        <meta name="description" content="" />
      </Head>

      {/* Main div */}
      <Wrapper>
        <Form />
      </Wrapper>
    </div>
  );
}
