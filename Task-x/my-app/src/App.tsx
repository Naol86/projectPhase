import { ListGroup } from './components';
import { ThemeContext } from './context/ThemeContext';
import React, { useState } from 'react';

function App() {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => setTheme((prevTheme) => !prevTheme);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ListGroup />
    </ThemeContext.Provider>
  );
}

export default App;
