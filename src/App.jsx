import { useEffect, useState } from 'react';
import MenuBar from './components/MenuBar';
import FilterBar from './components/FilterBar';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import { CountriesProvider } from './contexts/CountriesContext';

function App() {
  const [countries, setCountries] = useState(null);

  return (
    <CountriesProvider>
      <div className="h-full">
        <MenuBar></MenuBar>

        <main className="flex flex-col gap-4 py-8 px-4">
          <SearchBar></SearchBar>
          <FilterBar></FilterBar>
          <Card></Card>
        </main>
      </div>
    </CountriesProvider>
  );
}

export default App;
