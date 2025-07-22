import { createContext, useContext, useEffect, useState } from 'react';

const CountriesContext = createContext();

function CountriesProvider({ children }) {
  const [countries, setCountries] = useState([]);

  const [filteredCountries, setFilteredCountries] = useState([]);

  const [filteredCountriesQuery, setFilteredCountriesQuery] = useState('');

  const [searchedCountriesQuery, setSearchedCountriesQuery] = useState('');

  useEffect(() => {
    fetch('/data.json') // since it's in public/, use relative path
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => console.error('Error loading JSON:', err));
  }, []);

  useEffect(
    function () {
      let result = [...countries];

      if (filteredCountriesQuery)
        result = countries.filter((item) =>
          item?.region
            ?.toLowerCase()
            .includes(filteredCountriesQuery.toLowerCase())
        );

      if (searchedCountriesQuery)
        result = countries.filter((country) =>
          country?.name
            ?.toLowerCase()
            .includes(searchedCountriesQuery.toLocaleLowerCase())
        );

      return setFilteredCountries(result);
    },
    [countries, searchedCountriesQuery, filteredCountriesQuery]
  );

  return (
    <CountriesContext.Provider
      value={{
        countries,
        setSearchedCountriesQuery,
        searchedCountriesQuery,
        setFilteredCountriesQuery,
        filteredCountries,
        filteredCountriesQuery,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

// function useCountries() {
//   const context = useContext(CountriesContext);
//   if (context === undefined)
//     throw new Error('Cities context was used outside its provider');
//   return context;
// }

export { CountriesProvider, CountriesContext };
