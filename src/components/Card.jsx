import { useContext } from 'react';
import { CountriesContext } from '../contexts/CountriesContext';
import CountriesCard from './CountriesCard';

function Card() {
  const countries = useContext(CountriesContext);

  // console.log(context);
  return (
    <div>
      {countries.map((country, index) => (
        <CountriesCard country={country} key={index}></CountriesCard>
      ))}
    </div>
  );
}

export default Card;
