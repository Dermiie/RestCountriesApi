import { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';

function SearchBar() {
  const [value, setValue] = useState('');

  const handleValue = function (e) {
    setValue(e.target.value);
  };

  return (
    <div className="relative">
      {!value && (
        <HiOutlineSearch className="absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-400"></HiOutlineSearch>
      )}
      <input
        className="rounded-sm w-full px-7 py-2.5 focus:outline-none focus:ring-0  placeholder:pl-15 bg-white"
        placeholder="Search for a country..."
        type="text"
        value={value}
        onChange={handleValue}
      ></input>
    </div>
  );
}

export default SearchBar;
