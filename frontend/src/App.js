import './App.css';
import { Routes, Route } from "react-router-dom";
import Mama from './components/Mama';
import Kaka from './components/Kaka';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import Home from './components/Home';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ListEmployeeComponent" element={<ListEmployeeComponent />} />
        <Route path="kaka" element={<Kaka />} />
        <Route path="mama" element={<Mama />} />
        <Route path="AddEmployee" element={<AddEmployee />} />
      </Routes>
      <FooterComponent />
    </div>
  )
}

export default App;
