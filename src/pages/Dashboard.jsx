import MenuBar from '../components/MenuBar';
import FilterBar from '../components/FilterBar';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

function Dashboard() {
  return (
    <div className="h-full">
      <MenuBar></MenuBar>

      <main className="flex flex-col gap-4 py-8 px-4">
        <SearchBar></SearchBar>
        <FilterBar></FilterBar>
        <Card></Card>
      </main>
    </div>
  );
}

export default Dashboard;
