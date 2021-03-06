import axios from 'axios';
import Head from 'next/head';
import { useState } from 'react';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import ArrowRight from '../components/icons/ArrowRight';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [company_name, setCompanyName] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const submitForm = async () => {
    setSubmitting(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const formData = new FormData();

      formData.append('sender', 'Pedro Ogheneochuko');
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone_number', phone_number);
      formData.append('company_name', company_name);
      formData.append('message', message);

      const { data } = await axios({
        url: 'https://cors-anywhere.herokuapp.com/https://workwise.ng/api/savemessage',
        method: 'POST',
        headers: {
          Authorization: 'Bearer c7dd2554181c877c85d76430a59ff27c93286414',
        },
        data: formData,
      });
      console.log(data);
      setSuccessMessage('Message sent sucessfully!');
    } catch (error) {
      if (!error.response) {
        setErrorMessage('Unable to send message, may be network error.');
      } else if (error.response.status === 500) {
        setErrorMessage('Unable to send message, Must be a problem on our side :(');
      } else {
        setErrorMessage(error.response.data.message);
      }
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="w-full">
      <Head>
        <title>Damir Gojack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="w-full h-screen bg-cover relative"
        style={{ backgroundImage: "url('/images/jumbo.png')" }}
      >
        <Navbar />
        <div className="w-full h-full min-h-full max-w-7xl mx-auto flex items-center px-5 tablet:flex-wrap">
          <p className="text-8xl max-w-2xl font-bold text-white tablet:mt-40 phone:mt-20 smallTablet:text-7xl">
            Make Croatia Great Again.
          </p>
          <div className="p-12 rounded-full bg-white flex flex-col justify-center text-center mt-52 -ml-16 cursor-pointer hover:shadow-lg tablet:mt-20 tablet:mx-auto tablet:mb-auto phone:mt-10 phone:p-6">
            <ArrowRight className="mb-4 mx-auto" />
            <p className="text-md font-bold mb-4 smallPhone:text-xs" style={{ maxWidth: '94px' }}>
              Click here to get involved
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full max-w-7xl mx-auto px-5">
            <div
              className="w-full flex justify-between p-12 -mt-20 rounded phone:flex-wrap phone:p-6 tablet:mt-5"
              style={{ backgroundColor: '#F7F7F7' }}
            >
              <div className="text-2xl font-semibold phone:text-xl">
                <p>Honest . Patriotic . Committed</p>
                <p>
                  Vote <span className="font-bold text-yellowishLine">Damir Gojak</span> as
                  President 2023
                </p>
              </div>
              <img src="/images/dg-logo.png" className="h-14 w-14 phone:mx-auto phone:mt-5" />
            </div>
            <div className="w-full flex justify-between items-center mt-32 text-greyishText smallLaptop:flex-col phone:mt-16">
              <p className="text-2xl mr-auto smallLaptop:mb-10">My mission</p>
              <p className="text-8xl max-w-4xl tablet:text-6xl smallPhone:break-all">
                Development from the grassroots.
              </p>
            </div>
            <div className="w-full flex justify-end mb-32">
              <div className="">
                <p className="max-w-2xl text-2xl mt-20">
                  Damir Gojak has proposed an agenda with solutions that will have a direct and
                  immediate effect on people’s lives, from the most elite to the bottom line of the
                  society. Everyone would be involved.
                </p>
                <div className="mt-10">
                  <div className="flex items-center text-2xl cursor-pointer font-semibold text-greyishText">
                    <a href="#">Read Damir’s agenda</a>
                    <ArrowRight className="ml-2 mx-auto" />
                  </div>
                  <hr className="h-4 w-64 -mt-3 bg-yellowishLine" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-greyishBg py-28 relative px-5">
          <div className="w-full max-w-7xl mx-auto flex text-white" style={{ zIndex: '1' }}>
            <div className="w-full z-10">
              <p className="text-8xl max-w-4xl">
                About <br /> Damir Gojak.
              </p>
              <div className="w-full flex justify-center">
                <div className="">
                  <p className="w-full max-w-2xl text-2xl mt-10 m-0 z-10 smallLaptop:max-w-xl">
                    Damir Gojak is a lifelong public safety and civil rights leader. Elected in
                    2006, he is the first Zagreb man to serve as Attorney General of the state of
                    Croatia.
                  </p>
                  <div className="mt-10">
                    <div className="flex items-center text-2xl cursor-pointer font-semibold">
                      <a href="#">Learn more abour Damir</a>
                      <ArrowRight className="ml-2 mx-auto fill-current" />
                    </div>
                    <hr
                      className="h-4 -mt-3 border-none bg-yellowishLine"
                      style={{ width: '18.5rem' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/images/philip-martin.png"
              className="absolute right-0"
              style={{ marginTop: '-14.5rem', zIndex: '0' }}
            />
          </div>
        </div>
        <div className="w-full px-5">
          <div className="w-full max-w-7xl mx-auto pt-20 py-24">
            <div className="w-full min-w-full relative flex justify-center items-center">
              <img src="/images/video.png" className="w-full h-auto" />
              <img src="/images/play-icon.png" className="absolute phone:w-24 phone:h-auto" />
            </div>
            <div className="w-full flex justify-between mt-32 text-greyishText smallLaptop:flex-col smallLaptop:mt-20 phone:mt-16">
              <p className="text-2xl mr-auto mt-16 smallLaptop:mt-0 smallLaptop:mb-10">
                Get involved
              </p>
              <div className="w-full max-w-4xl mx-auto">
                <p className="text-8xl max-w-4xl tablet:text-6xl smallPhone:break-all">
                  Be Part of Our Community
                </p>
                <form
                  className="w-full mt-12"
                  onSubmit={(e) => {
                    e.preventDefault();
                    submitForm();
                  }}
                >
                  <input
                    placeholder="Full name"
                    className="p-5 rounded-xl w-full mb-5 border-inputBorder hover:shadow focus:border-black"
                    style={{ borderWidth: '1.5px' }}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    placeholder="Email address"
                    className="p-5 rounded-xl w-full mb-5 border-inputBorder hover:shadow focus:border-black"
                    style={{ borderWidth: '1.5px' }}
                    type="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    onInvalid={(e) =>
                      e.target.setCustomValidity(
                        'Email is required and should be in test@testmail.com format.',
                      )
                    }
                    onInput={(e) => e.target.setCustomValidity('')}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    placeholder="Phone number"
                    className="p-5 rounded-xl w-full mb-5 border-inputBorder hover:shadow focus:border-black"
                    style={{ borderWidth: '1.5px' }}
                    type="tel"
                    pattern="[0]{1}[7-9]{1}[0-9]{9}"
                    onInvalid={(e) =>
                      e.target.setCustomValidity(
                        'Phone number is required and should be in 08010001000 format.',
                      )
                    }
                    onInput={(e) => e.target.setCustomValidity('')}
                    required
                    value={phone_number}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <input
                    placeholder="Company name"
                    className="p-5 rounded-xl w-full mb-5 border-inputBorder hover:shadow focus:border-black"
                    style={{ borderWidth: '1.5px' }}
                    required
                    value={company_name}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                  <textarea
                    className="p-5 rounded-xl w-full mb-5 border-inputBorder hover:shadow focus:border-black"
                    style={{ borderWidth: '1.5px' }}
                    placeholder="Message"
                    required
                    value={message}
                    rows={8}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  {successMessage && <p className="mb-5 text-green-500">{successMessage}</p>}
                  {errorMessage && <p className="mb-5 text-red-500">{errorMessage}</p>}
                  <button
                    type="submit"
                    className="flex items-center text-2xl border-none font-semibold text-greyishText"
                    disabled={submitting}
                  >
                    <p>{submitting ? 'Sending message...' : 'Send message'}</p>
                    <ArrowRight className="ml-2 mx-auto" />
                  </button>
                  <hr className="h-4 w-48 -mt-3" style={{ backgroundColor: '#FFBE3F' }} />
                </form>
              </div>
            </div>
            <hr className="w-full bg-inputBorder mt-20" style={{ height: '1px' }} />
            <div className="mt-20">
              <p className="text-8xl max-w-4xl text-greyishText tablet:text-6xl smallPhone:break-all">
                Stay in the Know
              </p>
              <input
                placeholder="Email address"
                className="p-5 rounded-xl w-full max-w-4xl mt-10 mb-5 border-inputBorder hover:shadow focus:border-black"
                style={{ borderWidth: '1.5px' }}
              />
              <div className="mt-8">
                <div className="flex items-center text-2xl cursor-pointer text-greyishText font-semibold">
                  <p>Subscribe to our newsletter</p>
                  <ArrowRight className="ml-2 mx-auto fill-current" />
                </div>
                <hr
                  className="h-4 -mt-3 bg-yellowishLine smallPhone:hidden"
                  style={{ width: '21rem' }}
                />
                <hr className="h-4 -mt-3 bg-yellowishLine hidden smallPhone:block" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
