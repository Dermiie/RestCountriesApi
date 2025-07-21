function CountriesCard({ country }) {
  const { flag, name, region, population, capital } = country;

  return (
    <div className="flex flex-col mx-12 flex-wrap gap-8 my-16 self-center w-fit rounded-md shadow overflow-hidden">
      <div className="rounded-t-lg">
        <img src={flag} alt={`${name} flag`} width="800"></img>
      </div>
      <div className="p-8 flex gap-8 flex-col">
        <h1 className="text-2xl font-extrabold tracking-wide break-words">
          {name}
        </h1>
        <ul>
          <li>
            <span className="font-bold">Population: </span>
            {population}
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
    </div>
  );
}

export default CountriesCard;
