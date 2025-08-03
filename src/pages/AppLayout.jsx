import { Outlet } from 'react-router';
import Header from '../components/Header';

function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <Header></Header>
      <main className="py-8 px-6 overflow-auto">
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </div>
  );
}

export default AppLayout;
