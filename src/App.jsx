import { useEffect, useState } from 'react';
import MenuBar from './components/MenuBar';
import SearchBar from './components/SearchBar';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json') // since it's in public/, use relative path
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.error('Error loading JSON:', err));
  }, []);

  return (
    <div className="h-full">
      <header>
        <MenuBar></MenuBar>
      </header>
      <main className="py-8 px-4">
        <SearchBar></SearchBar>
      </main>
    </div>
  );
}

export default App;
