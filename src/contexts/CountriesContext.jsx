import { createContext, useContext, useEffect, useState } from 'react';

const CountriesContext = createContext();

function CountriesProvider({ children }) {
  const [countries, setCountries] = useState([]);

  const [filteredCountriesQuery, setFilteredCountriesQuery] = useState('');

  const filteredCountries = countries.filter((item) =>
    item?.region?.toLowerCase().includes(filteredCountriesQuery.toLowerCase())
  );

  useEffect(() => {
    fetch('/data.json') // since it's in public/, use relative path
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => console.error('Error loading JSON:', err));
  }, []);

  return (
    <CountriesContext.Provider
      value={{
        countries,
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
