import { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { CountriesContext } from '../contexts/CountriesContext';

function CountriesPage() {
  const { code } = useParams(); // Get the country code from URL
  const { fetchCurrentCountry, currentCountry } = useContext(CountriesContext);

  useEffect(
    function () {
      fetchCurrentCountry(code);
    },
    [code, fetchCurrentCountry]
  );

  if (!currentCountry) return <p>Country not found.</p>;
  return <div>{currentCountry.name}</div>;
}

export default CountriesPage;
