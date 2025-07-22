import { useContext } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { CountriesContext } from '../contexts/CountriesContext';

function SearchBar() {
  const { searchedCountriesQuery, setSearchedCountriesQuery } =
    useContext(CountriesContext);

  const handleValue = function (e) {
    setSearchedCountriesQuery(e.target.value);
  };

  return (
    <div className="relative">
      {!searchedCountriesQuery && (
        <HiOutlineSearch className="absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-400"></HiOutlineSearch>
      )}
      <input
        className="rounded-sm w-full px-7 py-2.5 focus:outline-none focus:ring-0  placeholder:pl-15 bg-white"
        placeholder="Search for a country..."
        type="text"
        value={searchedCountriesQuery}
        onChange={handleValue}
      ></input>
    </div>
  );
}

export default SearchBar;
