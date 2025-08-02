import { BrowserRouter, Route, Routes } from 'react-router';
import Dashboard from './pages/Dashboard';
import CountriesPage from './pages/CountriesPage';
import { CountriesProvider } from './contexts/CountriesContext';
import AppLayout from './pages/AppLayout';

function App() {
  return (
    <CountriesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout></AppLayout>}>
            <Route index element={<Dashboard></Dashboard>}></Route>
            <Route
              path="country/:code"
              element={<CountriesPage></CountriesPage>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </CountriesProvider>
  );
}
export default App;
