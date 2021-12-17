import Image from 'next/image';

function FirstPage() {
  return (
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
        Welcome to the Multi-Step Form
      </h1>

      {/* Description */}
      <p className="text-center text-lg my-5">
        This is a multi-step form. It will help you to get the best experience
        from our website.
      </p>
    </div>
  );
}

export default FirstPage;
