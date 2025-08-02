import MenuBar from '../components/Header';
import FilterBar from '../components/FilterBar';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <SearchBar></SearchBar>
      <FilterBar></FilterBar>
      <Card></Card>
    </div>
  );
}

export default Dashboard;
