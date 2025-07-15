import { HiOutlineMoon } from 'react-icons/hi';

function MenuBar() {
  return (
    <div className="flex content-between w-full">
      <h1>Where in the world</h1>
      <h3>
        <span>
          <HiOutlineMoon />
        </span>{' '}
        Dark Mode
      </h3>
    </div>
  );
}

export default MenuBar;
