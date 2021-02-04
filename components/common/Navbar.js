function Navbar() {
  return (
    <div className="w-full absolute flex justify-end space-x-5 py-14 px-10 font-semibold text-xl text-white smallTablet:flex-wrap phone:py-3 smallTablet:px-5">
      <a className="border-yellow-400 hover:border-b-4 phone:mb-2" href="#">
        Meet Damir
      </a>
      <a className="border-yellow-400 hover:border-b-4 phone:mb-2" href="#">
        Our Agenda
      </a>
      <a className="border-yellow-400 hover:border-b-4 phone:mb-2" href="#">
        Policies
      </a>
      <a className="border-yellow-400 hover:border-b-4 phone:mb-2" href="#">
        Events
      </a>
      <a className="border-yellow-400 hover:border-b-4 phone:mb-2" href="#">
        Store
      </a>
    </div>
  );
}

export default Navbar;
