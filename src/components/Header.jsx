import { HiOutlineMoon } from 'react-icons/hi';

function Header() {
  return (
    <div className="p-4 flex justify-between bg-white w-full shadow-md">
      <div>Where in the world</div>
      <div>
        <span>
          <HiOutlineMoon />
        </span>{' '}
        Dark Mode
      </div>
    </div>
  );
}

export default Header;
