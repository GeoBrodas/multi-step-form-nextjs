import { useState } from 'react';
import FirstPage from './steps/FirstPage';
import FourthPage from './steps/FourthPage';
import SecondPage from './steps/SecondPage';
import ThirdPage from './steps/ThirdPage';

function Form() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const FormTitles = ['1/4', '2/4', '3/4', '4/4'];

  const ConditionalComponent = () => {
    if (page === 0) {
      return <FirstPage />;
    } else if (page === 1) {
      return <SecondPage />;
    } else if (page === 2) {
      return <ThirdPage />;
    } else if (page === 3) {
      return <FourthPage />;
    }
  };

  return (
    <div className="flex flex-col justify-between my-20">
      {/* Main form */}
      <div>
        <p className="text-center mx-auto font-semibold italic rounded-full p-2 bg-blue-200 h-10 w-10">
          {FormTitles[page]}
        </p>
        {ConditionalComponent()}

        {/* controls for form */}
        <div className="text-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert('This is the last page');
              } else {
                setPage((currentPage) => currentPage + 1);
              }
            }}
          >
            {page === 0 ? 'Start' : 'Next'}
          </button>
        </div>
      </div>

      {/* footer */}
      <div className="text-center mt-10">
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
      </div>
    </div>
  );
}

export default Form;
