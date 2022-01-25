import axios from 'axios';
import Footer from 'Layouts/Footer';
import { useRouter } from 'next/router';
import { useState } from 'react';
import toast from 'react-hot-toast';
import CheckList from './steps/CheckList';
import FifthPage from './steps/FifthPage';
import FirstPage from './steps/FirstPage';
import FourthPage from './steps/FourthPage';
import ImagesSelectPage from './steps/ImagesSelectPage';
import ScatteredImagesPage from './steps/ScatteredImagesPage';
import SecondPage from './steps/SecondPage';
import ThirdPage from './steps/ThirdPage';
import UploadPage from './steps/UploadPage';

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
    image1: false,
    image2: false,
    image3: false,
    image4: false,
    s3imageUrl: null,
    isPaid: false,
  });

  const FormTitles = [
    '1/9',
    '2/9',
    '3/9',
    '4/9',
    '5/9',
    '6/9',
    '7/9',
    '8/9',
    '9/9',
  ];

  // order in which the components are rendered -> check /components/steps
  const ConditionalComponent = () => {
    if (page === 0) {
      return <FirstPage />;
    } else if (page === 1) {
      return <SecondPage data={data} setData={setData} />;
    } else if (page === 2) {
      return <ThirdPage data={data} setData={setData} />;
    } else if (page === 3) {
      return <UploadPage data={data} setData={setData} />;
    } else if (page === 4) {
      return <ImagesSelectPage data={data} setData={setData} />;
    } else if (page === 5) {
      return <ScatteredImagesPage />;
    } else if (page === 6) {
      return <CheckList data={data} />;
    } else if (page === 7) {
      return <FourthPage data={data} setData={setData} />;
    } else if (!errorMessage && page === 8) {
      return <FifthPage />;
    }
  };

  // for disabling the button if no input is provided
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
      if (data.s3imageUrl === null) {
        return true;
      } else {
        return false;
      }
    } else if (page === 4) {
      if (
        data.image1 === false &&
        data.image2 === false &&
        data.image3 === false &&
        data.image4 === false
      ) {
        return true;
      } else {
        return false;
      }
    } else if (page === 7) {
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
                // validation check for image upload -> form3
                if (data.s3imageUrl === null) {
                  alert('Image is required');
                  return;
                } else {
                  setPage(page + 1);
                  console.log(data);
                }
              } else if (page === 4) {
                // validation check for image upload -> form4
                if (
                  data.image1 === false &&
                  data.image2 === false &&
                  data.image3 === false &&
                  data.image4 === false
                ) {
                  alert('Atleast one image is to be selected');
                  return;
                } else {
                  setPage(page + 1);
                  console.log(data);
                }
              } else if (page === 7) {
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
                      toast.dismiss(toastId);
                      toast.success('Your response has been submitted!');
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
                        image1: false,
                        image2: false,
                        image3: false,
                        image4: false,
                        s3imageUrl: null,
                        isPaid: false,
                      });
                    })
                    .catch((err) => {
                      toast.dismiss(toastId);
                      toast.error('Something went wrong!');
                      setErrorMessage(err?.response.data.message);
                      // display error message from server
                      // alert(
                      //   err.response.data.message ||
                      //     err ||
                      //     'Something went wrong'
                      // );
                      router.push('/submission/alreadyexists');
                      console.log(
                        err.response.data.message ||
                          err ||
                          'something went wrong'
                      );
                    });
                  if (!errorMessage) {
                    setPage(page + 1);
                  }
                  console.log(data);
                }
              } else if (page === 8) {
                setPage(0);
              } else {
                setPage(page + 1);
                console.log(data);
              }
            }}
          >
            {page === 0
              ? 'Start'
              : page === 7
              ? 'Submit'
              : page === 8
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
