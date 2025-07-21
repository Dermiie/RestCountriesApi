import { useContext } from 'react';
import { CountriesContext } from '../contexts/CountriesContext';
import CountriesCard from './CountriesCard';

function Card() {
  const { countries, filteredCountries, filteredCountriesQuery } =
    useContext(CountriesContext);

  const displayList = filteredCountriesQuery ? filteredCountries : countries;

  return (
    <>
      {displayList.map((country) => (
        <CountriesCard country={country} key={country.cca3} />
      ))}
    </>
  );
}

export default Card;
