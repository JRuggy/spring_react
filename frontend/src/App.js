import './App.css';
import { Routes, Route } from "react-router-dom";
import Mama from './components/Mama';
import Kaka from './components/Kaka';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        {/* <Route path="/" element={<ListEmployeeComponent />} />
        <Route path="employee" element={<ListEmployeeComponent />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="ListEmployeeComponent" element={<ListEmployeeComponent />} />
        <Route path="kaka" element={<Kaka />} />
        <Route path="mama" element={<Mama />} />
        <Route path="mama" element={<Kaka />} />
      </Routes>
      <FooterComponent />
    </div>
  )
}

export default App;
