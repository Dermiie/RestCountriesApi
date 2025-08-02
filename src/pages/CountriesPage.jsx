import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { CountriesContext } from '../contexts/CountriesContext';
import Button from '../components/Button';

function CountriesPage() {
  const navigate = useNavigate();
  const { code } = useParams(); // Get the country code from URL
  const { currentCountry, fetchCurrentCountry } = useContext(CountriesContext);

  useEffect(
    function () {
      fetchCurrentCountry(code);
    },
    [code, fetchCurrentCountry]
  );

  if (!currentCountry) return <p>Country not found.</p>;

  const { name, flag } = currentCountry;

  function handleBackButton() {
    navigate(-1);
  }

  return (
    <div className="flex flex-col gap-8">
      <Button onClick={handleBackButton}>Back</Button>
      <img src={flag} alt={`${currentCountry?.name} flag`}></img>
      <section>
        <h2>{name}</h2>
        <ul>
          <li>Native Name</li>
          <li>Population</li>
          <li>Region</li>
          <li>Sub - Region</li>
          <li>Capital</li>
        </ul>
        <ul>
          <li>Top Level Domains</li>
          <li>Currencies</li>
          <li>Language</li>
        </ul>
        <div>
          <p>Border Countries</p>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </section>
    </div>
  );
}

export default CountriesPage;
