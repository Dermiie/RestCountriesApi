import { useContext } from 'react';
import { CountriesContext } from '../contexts/CountriesContext';
import CountriesCard from './CountriesCard';
import { useNavigate } from 'react-router';

function Card() {
  const { countries, filteredCountries } = useContext(CountriesContext);
  const navigate = useNavigate();

  return (
    <>
      {filteredCountries.length > 0
        ? filteredCountries.map((country, index) => (
            <CountriesCard
              key={index}
              country={country}
              onClick={() => navigate(`/country/${country.alpha3code}`)}
            />
          ))
        : countries.map((country, index) => (
            <CountriesCard
              key={index}
              country={country}
              onClick={() => navigate(`/country/${country.alpha3code}`)}
            />
          ))}
    </>
  );
}

export default Card;
