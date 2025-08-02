import { useContext } from 'react';
import { CountriesContext } from '../contexts/CountriesContext';
import CountriesCard from './CountriesCard';

function Card() {
  const { countries, filteredCountries } = useContext(CountriesContext);

  return (
    <>
      {filteredCountries.length > 0
        ? filteredCountries.map((country, index) => (
            <CountriesCard key={index} country={country} />
          ))
        : countries.map((country, index) => (
            <CountriesCard key={index} country={country} />
          ))}
    </>
  );
}

export default Card;
