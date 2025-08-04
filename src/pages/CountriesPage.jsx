import { useContext, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { CountriesContext } from '../contexts/CountriesContext';
import Button from '../components/Button';

function CountriesPage() {
  const navigate = useNavigate();
  const { code } = useParams(); // Get the country code from URL
  const { currentCountry, fetchCurrentCountry, countries } =
    useContext(CountriesContext);

  useEffect(
    function () {
      fetchCurrentCountry(code);
    },
    [code, fetchCurrentCountry]
  );

  if (!currentCountry) return <p>Country not found.</p>;

  const {
    name,
    flag,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = currentCountry;

  const [currency] = currencies;

  const languageName = languages.map((lang) => lang.name);

  const languageList = languageName.join(', ');

  function handleBackButton() {
    navigate(-1);
  }

  return (
    <div className="flex flex-col gap-8">
      <Button onClick={handleBackButton}>Back</Button>

      <div className="rounded-lg overflow-hidden">
        <img src={flag} alt={`${currentCountry?.name} flag`}></img>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-5">{name}</h2>
        <ul className="space-y-3  mb-5">
          <li>
            <span className="font-bold">Native Name: </span> {nativeName}
          </li>
          <li>
            <span className="font-bold">Population: </span>
            {population}
          </li>
          <li>
            <span className="font-bold">Region: </span>
            {region}
          </li>
          <li>
            <span className="font-bold">Sub Region: </span>
            {subregion}
          </li>
          <li>
            <span className="font-bold">Capital: </span>
            {capital}
          </li>
        </ul>
        <ul className="space-y-3  mt-2 mb-5">
          <li>
            <span className="font-bold">Top Level Domain:</span>{' '}
            {topLevelDomain}
          </li>
          <li>
            <span className="font-bold">Currencies: </span>
            {currency.name}
          </li>
          <li>
            <span className="font-bold">Languages: </span>
            {languageList}
          </li>
        </ul>
        <div>
          <p className="font-bold mb-3">Border Countries:</p>
          <div className="flex gap-4 flex-wrap">
            {borders?.map((border, index) => {
              const borderCountry = countries.find(
                (country) => country.alpha3Code === border
              );

              const borderName = borderCountry ? borderCountry.name : border;

              return (
                <button
                  onClick={() =>
                    navigate(`/country/${borderCountry?.alpha3Code}`)
                  }
                  key={index}
                  className="p-4 bg-white shadow-2xl inline-block"
                >
                  {borderName}
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CountriesPage;
