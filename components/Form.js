import axios from 'axios';
import Footer from 'Layouts/Footer';
import { useRouter } from 'next/router';
import { useState } from 'react';
import toast from 'react-hot-toast';
import FifthPage from './steps/FifthPage';
import FirstPage from './steps/FirstPage';
import FourthPage from './steps/FourthPage';
import SecondPage from './steps/SecondPage';
import ThirdPage from './steps/ThirdPage';

function Form() {
  const [page, setPage] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter();
  const [data, setData] = useState({
    name: '',
    address: '',
    zipcode: '',
    city: '',
    email: '',
    phone: '',
    message: '',
    agreement1: false,
    agreement2: false,
    agreement3: false,
    agreement4: false,
    isPaid: false,
  });

  const FormTitles = ['1/5', '2/5', '3/5', '4/5', '5/5'];

  const ConditionalComponent = () => {
    if (page === 0) {
      return <FirstPage />;
    } else if (page === 1) {
      return <SecondPage data={data} setData={setData} />;
    } else if (page === 2) {
      return <ThirdPage data={data} setData={setData} />;
    } else if (page === 3) {
      return <FourthPage data={data} setData={setData} />;
    } else if (!errorMessage && page === 4) {
      return <FifthPage />;
    }
  };

  function disableHandler() {
    if (page === 1) {
      if (data.email === '') {
        return true;
      } else {
        return false;
      }
    } else if (page === 2) {
      if (
        data.address === '' ||
        data.zipcode === '' ||
        data.city === '' ||
        data.name === ''
      ) {
        return true;
      } else {
        return false;
      }
    } else if (page === 3) {
      if (
        data.agreement1 === false ||
        data.agreement2 === false ||
        data.agreement3 === false ||
        data.agreement4 === false
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  return (
    <div className="flex h-4/5 w-auto mx-10 flex-col justify-between my-20">
      {/* Main form */}
      <div>
        <p className="text-center mx-auto font-semibold italic rounded-full p-2 bg-blue-200 h-10 w-10">
          {FormTitles[page]}
        </p>
        {ConditionalComponent()}

        {/* controls for form */}
        <div className="text-center">
          <button
            disabled={disableHandler()}
            className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold py-2 px-4 rounded-tr-lg rounded-bl-lg"
            onClick={() => {
              if (page === 1) {
                // validation check for email address -> form1
                if (
                  !data.email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)
                ) {
                  alert('Invalid email address');
                  return;
                } else {
                  setPage(page + 1);
                  console.log(data);
                }
              } else if (page === 2) {
                // validation checks for name, city, address, Zipcode -> form2
                if (data.name === '') {
                  alert('Name is required');
                  return;
                } else if (data.city === '') {
                  alert('City is required');
                  return;
                } else if (data.address === '') {
                  alert('Address is required');
                  return;
                } else if (data.zipcode === '') {
                  alert('Zipcode is required');
                  return;
                } else {
                  setPage(page + 1);
                  console.log(data);
                }
              } else if (page === 3) {
                // validation checks if all checkboxes are checked for agreement -> form4
                if (data.agreement1 === false) {
                  alert('You must agree to the Privacy Policy');
                  return;
                } else if (data.agreement2 === false) {
                  alert('You must agree to the Terms of Service');
                  return;
                } else if (data.agreement3 === false) {
                  alert('You must agree to the Terms of Use');
                  return;
                } else if (data.agreement4 === false) {
                  alert('You must agree to the Miscellaneous');
                  return;
                } else {
                  // make a axios post request to api route '/api/send-to-google-sheet' with data as the request body
                  const toastId = toast.loading('Submitting your response...');

                  axios
                    .post('/api/send-to-google-sheet', data)
                    .then((res) => {
                      // console.log(res);
                      alert('Form submitted');
                      setData({
                        name: '',
                        address: '',
                        zipcode: '',
                        city: '',
                        email: '',
                        phone: '',
                        message: '',
                        agreement1: false,
                        agreement2: false,
                        agreement3: false,
                        agreement4: false,
                        isPaid: false,
                      });
                      toast.dismiss(toastId);
                    })
                    .catch((err) => {
                      toast.dismiss(toastId);
                      setErrorMessage(err.response.data.message);
                      // display error message from server
                      // alert(
                      //   err.response.data.message ||
                      //     err ||
                      //     'Something went wrong'
                      // );
                      router.push('/submission/alreadyexists');
                      console.log(
                        err.response.data.message || 'something went wrong'
                      );
                    });
                  if (!errorMessage) {
                    setPage(page + 1);
                  }
                  console.log(data);
                }
              } else if (page === 4) {
                setPage(0);
              } else {
                setPage(page + 1);
                console.log(data);
              }
            }}
          >
            {page === 0
              ? 'Start'
              : page === 3
              ? 'Submit'
              : page === 4
              ? 'Complete Form'
              : 'Next'}
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Form;
