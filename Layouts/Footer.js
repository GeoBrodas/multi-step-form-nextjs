import { ImFacebook2 } from 'react-icons/im';

function Footer() {
  return (
    <div className="text-center">
      <div className="flex mx-auto items-center space-x-4 justify-center">
        {/* footer */}
        <p className="text-sm text-gray-500">
          {/* Copyright */}
          &copy; {new Date().getFullYear()}
          {/* Company */}{' '}
          <a
            className="text-gray-500"
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Your company name
          </a>
        </p>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImFacebook2 className="text-gray-500" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
