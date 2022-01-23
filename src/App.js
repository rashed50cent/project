import logo from './logo.svg';
import './App.css';

import HomePages from './pages/HomePages';
import RouterPages from './Router/RouterPages';
import {BrowserRouter} from 'react-router-dom'





function App() {
  return (
    <BrowserRouter>
      <RouterPages/>
    </BrowserRouter>
  );
}

export default App;
