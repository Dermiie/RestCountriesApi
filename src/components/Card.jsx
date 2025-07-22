import { useContext } from 'react';
import { CountriesContext } from '../contexts/CountriesContext';
import CountriesCard from './CountriesCard';

function Card() {
  const { countries, filteredCountries } = useContext(CountriesContext);

  return (
    <>
      {filteredCountries.length > 0
        ? filteredCountries.map((country) => (
            <CountriesCard key={country.cca3} country={country} />
          ))
        : countries.map((country) => (
            <CountriesCard key={country.cca3} country={country} />
          ))}
    </>
  );
}

export default Card;
