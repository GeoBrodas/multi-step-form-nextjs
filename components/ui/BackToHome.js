import Link from 'next/link';

function BackToHome() {
  return (
    <Link href="/">
      <a className="mx-auto my-5 text-gray-500 hover:underline text-lg">
        Head back to homepage
      </a>
    </Link>
  );
}

export default BackToHome;
