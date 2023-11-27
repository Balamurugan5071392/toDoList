import './App.css';
import Content from './Content';
import Header from './Header';
import { useState } from 'react';

function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState()
  const [isDarkText, setIsDarkText] = useState(true)
  return (
    <div className="App">
      <Header
        colorValue = {colorValue}
        hexValue = {hexValue}
        isDarkText = {isDarkText}
      />
      <Content
        colorValue = {colorValue}
        setColorValue = {setColorValue}
        setHexValue = {setHexValue}
        isDarkText = {isDarkText}
        setIsDarkText = {setIsDarkText}
      />
      
    </div>
  );
}

export default App;
