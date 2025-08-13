import { useContext } from 'react';
import { CountriesContext } from '../contexts/CountriesContext';
import CountriesCard from './CountriesCard';

function Card() {
  const { countries, filteredCountries } = useContext(CountriesContext);

  return (
    <div className="md:grid md:grid-cols-2 lg:grid-cols-4 w-full">
      {filteredCountries.length > 0
        ? filteredCountries.map((country, index) => (
            <CountriesCard key={index} country={country} />
          ))
        : countries.map((country, index) => (
            <CountriesCard key={index} country={country} />
          ))}
    </div>
  );
}

export default Card;
