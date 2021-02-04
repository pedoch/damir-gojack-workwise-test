import Facebook from '../icons/Facebook';
import Instagram from '../icons/Instagram';
import LinkedIn from '../icons/LinkedIn';
import Twitter from '../icons/Twitter';

function Footer() {
  return (
    <div className="w-full bg-greyishBg py-28 relative px-5">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-2 text-white smallTablet:grid-cols-1">
        <div className="col-span-1 text-lg">
          <img src="/images/dg-logo-white.png" className="mb-10" />
          <p className="font-semibold">
            The Office of <br />
            Damir Radmjal Gojak,
          </p>
          <p className="mb-6">Presidential Candidate 2023</p>
          <p>
            ©2020 <br />
            Privacy Policy
          </p>
        </div>
        <div className="col-span-1 mt-8 smallTablet:mt-12">
          <div className="w-full flex justify-between space-x-5 font-semibold text-lg tablet:flex-col tablet:space-x-0">
            <a className="hover:text-yellow-500 mb-2" href="#">
              Meet Damir
            </a>
            <a className="hover:text-yellow-500 mb-2" href="#">
              Our Agenda
            </a>
            <a className="hover:text-yellow-500 mb-2" href="#">
              Policies
            </a>
            <a className="hover:text-yellow-500 mb-2" href="#">
              Events
            </a>
            <a className="hover:text-yellow-500 mb-2" href="#">
              Store
            </a>
          </div>
          <hr className="w-full bg-white my-10" style={{ height: '1px' }} />
          <p className="text-lg mb-5">Follow us on social media</p>
          <div className="flex space-x-5 flex-wrap">
            <a href="https://instagram.com" target="_blank" rel="noopener">
              <Instagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener">
              <Facebook />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener">
              <LinkedIn />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
