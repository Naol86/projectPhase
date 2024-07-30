export default function ListGroup() {
  const cities = ['New York', 'Los Angeles', 'Chicago'];

  return (
    <>
      <h1 className='text-3xl font-bold'>List Group</h1>
      <ul className='divide-y-2 font-medium text-2xl'>
        <li></li>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
        <li></li>
      </ul>
    </>
  );
}
