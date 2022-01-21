import Notification from '@/components/ui/Notification';
import Head from 'next/head';
import Link from 'next/link';

function UserAlreadyExists({ errorMessage }) {
  return (
    <div className="grid h-screen place-content-center">
      <Head>
        <title>Something went wrong!</title>
      </Head>

      <div className="mx-auto flex flex-col space-y-10">
        <Notification
          message={
            errorMessage ||
            'You cannot submit any survey right now, this maybe means that - '
          }
        />

        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold">Possible reasons?</h2>
          <ul className="text-xl list-disc ml-10">
            <li>You may have already registered before!</li>
            <li>One or more services maybe down!</li>
            <li>There might be a bug?</li>
          </ul>
        </div>

        <Link href="/">
          <a className="mx-auto text-gray-500 hover:underline text-lg">
            Head back to homepage
          </a>
        </Link>
      </div>
    </div>
  );
}

export default UserAlreadyExists;
