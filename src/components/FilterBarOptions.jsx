function FilterBarOptions() {
  return (
    <ul className="bg-white flex flex-col  gap-2 justify-between px-7 py-2.5">
      <li>Africa</li>
      <li>Antratica</li>
      <li>Asia</li>
      <li value={'Oceania'}>Australia</li>
      <li>Europe</li>
      <li>North America</li>
      <li>South America</li>
    </ul>
  );
}

export default FilterBarOptions;
