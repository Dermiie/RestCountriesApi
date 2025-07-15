import { useEffect, useState } from 'react';
import MenuBar from './components/MenuBar';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json') // since it's in public/, use relative path
      .then((res) => res.json())
      .then((data) => {
        setData(data);

        console.log(data);
      })
      .catch((err) => console.error('Error loading JSON:', err));
  }, []);

  return (
    <div>
      <header className="p-4">
        <MenuBar></MenuBar>
      </header>
    </div>
  );
}

export default App;
