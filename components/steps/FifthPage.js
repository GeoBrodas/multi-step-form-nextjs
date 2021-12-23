import Link from 'next/link';

function FifthPage() {
  return (
    <div className="flex space-y-4 my-5 flex-col mx-auto">
      <p className="text-3xl font-semibold">
        Thankyou for submitting the survey!
      </p>

      <p className="text-lg">
        Before you move on we have another proposal for you to donate to{' '}
        <span className="text-xl bg-gradient-to-r from-blue-500 to-red-400 text-transparent bg-clip-text">
          #TeamSeas
        </span>{' '}
        <Link href="/donate">
          <a className="text-blue-600 underline">here</a>
        </Link>
      </p>
    </div>
  );
}

export default FifthPage;
