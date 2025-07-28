import { BrowserRouter, Route, Routes } from 'react-router';
import Dashboard from './pages/Dashboard';
import CountriesPage from './pages/CountriesPage';
import { CountriesProvider } from './contexts/CountriesContext';

function App() {
  return (
    <CountriesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard></Dashboard>}></Route>
          <Route
            path="/country/:code"
            element={<CountriesPage></CountriesPage>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </CountriesProvider>
  );
}
export default App;
