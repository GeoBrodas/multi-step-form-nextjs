import Image from 'next/image';
import Link from 'next/link';
import { Fade } from 'react-reveal';

function FirstPage() {
  return (
    <Fade>
      <div className="flex flex-col place-items-center my-5">
        {/* Logo */}
        <div>
          <Image
            alt="logo"
            layout="fixed"
            width="100"
            height="100"
            src="/G.png"
          />
        </div>

        {/* Title */}
        <h1 className="text-center text-3xl font-bold my-5">
          Welcome to the{' '}
          <span className="bg-clip-text italic text-transparent bg-gradient-to-r from-pink-400 via bg-orange-200 to-red-600">
            Multi-Step Form
          </span>
        </h1>

        {/* Description */}
        <p className="text-center text-lg my-5">
          This is a multi-step form. It will help you to get the best experience
          from our website.
        </p>

        <Link href="/our-mission">
          <a className="underline text-gray-400 hover:text-gray-500">
            Watch the full tutorial here.
          </a>
        </Link>
      </div>
    </Fade>
  );
}

export default FirstPage;
