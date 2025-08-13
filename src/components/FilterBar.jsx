import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import FilterBarOptions from './FilterBarOptions';

function FilterBar() {
  const [openOptions, setOpenOptions] = useState(false);

  function handleClick() {
    setOpenOptions(!openOptions);
  }

  return (
    <div className=" flex flex-col gap-4">
      <div className="bg-white flex justify-between px-5 py-2.5">
        <p>Filter By Region</p>
        <button onClick={handleClick}>
          <HiChevronDown />
        </button>
      </div>
      {openOptions && <FilterBarOptions></FilterBarOptions>}
    </div>
  );
}

export default FilterBar;

// function FilterBar() {
//   const [selected, setSelected] = useState('');

//   const continents = [
//     'Africa',
//     'Antarctica',
//     'Asia',
//     'Australia',
//     'Europe',
//     'North America',
//     'South America',
//   ];

//   return (
//     <select
//       id="fruit"
//       value={selected}
//       onChange={(e) => setSelected(e.target.value)}
//       className="rounded-sm w-full px-7 mb-5 py-2.5 focus:outline-none border-none focus:ring-0  placeholder:pl-15 bg-white"
//     >
//       <option value="">Select Region</option>
//       {continents.map((continent, index) => (
//         <option
//           className="focus:outline-none border-none focus:ring-0"
//           key={index}
//           value={continent}
//         >
//           {continent}
//         </option>
//       ))}
//     </select>
//   );
// }
