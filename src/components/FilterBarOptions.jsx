import { useContext } from 'react';
import { CountriesContext } from '../contexts/CountriesContext';

function FilterBarOptions({ openOptions, setOpenOptions }) {
  const { setFilteredCountriesQuery } = useContext(CountriesContext);

  function handleClick(region) {
    setFilteredCountriesQuery(region);

    setOpenOptions(!openOptions);
  }

  return (
    <ul className="bg-white flex flex-col rounded-md absolute w-full mt-2 left-0 top-full gap-2 justify-between z-10  shadow-md">
      <li
        onClick={() => handleClick('Africa')}
        className="cursor-pointer px-7 py-2.5 hover:bg-stone-200 duration-200 transition-all"
      >
        Africa
      </li>
      <li
        onClick={() => handleClick('Polar')}
        className="cursor-pointer px-7 py-2.5 hover:bg-stone-200 duration-200 transition-all"
      >
        Antarctica
      </li>
      <li
        onClick={() => handleClick('Asia')}
        className="cursor-pointer px-7 py-2.5 hover:bg-stone-200 duration-200 transition-all"
      >
        Asia
      </li>
      <li
        onClick={() => handleClick('Oceania')}
        className="cursor-pointer px-7 py-2.5 hover:bg-stone-200 duration-200 transition-all"
      >
        Australia
      </li>
      <li
        onClick={() => handleClick('Europe')}
        className="cursor-pointer px-7 py-2.5 hover:bg-stone-200 duration-200 transition-all"
      >
        Europe
      </li>
      <li
        onClick={() => handleClick('America')}
        className="cursor-pointer px-7 py-2.5 hover:bg-stone-200 duration-200 transition-all"
      >
        America
      </li>
      <li
        onClick={() => handleClick('')}
        className="cursor-pointer px-7 py-2.5 hover:bg-stone-200 duration-200 transition-all"
      >
        Clear Filter
      </li>
    </ul>
  );
}

export default FilterBarOptions;
