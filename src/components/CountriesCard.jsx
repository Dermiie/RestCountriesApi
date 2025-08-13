import { useContext } from 'react';
import { Link } from 'react-router';
import { CountriesContext } from '../contexts/CountriesContext';

function CountriesCard({ country }) {
  const { flag, name, region, population, capital, alpha3Code: code } = country;

  const { formatNumber } = useContext(CountriesContext);

  return (
    <Link
      to={`/country/${code}`}
      className="flex flex-col max-w-fit mx-12 hover:-translate-y-3 transition-all duration-300 flex-wrap gap-8 my-16 self-center w-fit rounded-md shadow overflow-hidden"
    >
      <div className="rounded-t-lg h-1/3 ">
        <img
          className="object-cover w-full h-full "
          src={flag}
          alt={`${name} flag`}
        ></img>
      </div>
      <div className="p-8 flex gap-8 flex-col">
        <h1 className="text-2xl font-extrabold tracking-wide break-words">
          {name}
        </h1>
        <ul>
          <li>
            <span className="font-bold">Population: </span>
            {formatNumber(population)}
          </li>
          <li>
            <span className="font-bold">Region: </span> {region}
          </li>
          <li>
            <span className="font-bold">Capital: </span>
            {capital}
          </li>
        </ul>
      </div>
    </Link>
  );
}

export default CountriesCard;
