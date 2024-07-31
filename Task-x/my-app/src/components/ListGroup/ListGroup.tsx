import { useTheme } from '../../context/ThemeContext';

export default function ListGroup() {
  const cities = ['New York', 'Los Angeles', 'Chicago'];
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <h1
        className={`text-3xl font-bold ${!theme && 'bg-gray-900 text-white'}`}
      >
        List Group
      </h1>
      <ul className='divide-y-2 font-medium text-2xl'>
        <li></li>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
        <li></li>

        <button onClick={toggleTheme}>Toggle Theme</button>
      </ul>
    </>
  );
}
