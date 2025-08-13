import { useContext } from 'react';
import { CountriesContext } from '../contexts/CountriesContext';

function FilterBarOptions() {
  const { setFilteredCountriesQuery } = useContext(CountriesContext);

  function handleClick(region) {
    setFilteredCountriesQuery(region);
  }

  return (
    <ul className="bg-white flex flex-col gap-2 justify-between z-10 px-7 py-2.5">
      <li onClick={() => handleClick('Africa')}>Africa</li>
      <li onClick={() => handleClick('Polar')}>Antarctica</li>
      <li onClick={() => handleClick('Asia')}>Asia</li>
      <li onClick={() => handleClick('Oceania')}>Australia</li>
      <li onClick={() => handleClick('Europe')}>Europe</li>
      <li onClick={() => handleClick('America')}>America</li>
    </ul>
  );
}

export default FilterBarOptions;
