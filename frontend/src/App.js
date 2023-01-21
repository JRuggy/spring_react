import './App.css';
import { Routes, Route } from "react-router-dom";
import Mama from './components/Mama';
import Kaka from './components/Kaka';
// import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        {/* <Route path="/" element={<ListEmployeeComponent />} />
        <Route path="employee" element={<ListEmployeeComponent />} /> */}
        <Route path="/" element={<Mama />} />
        <Route path="kaka" element={<Kaka />} />
      </Routes>
      <FooterComponent />
    </div>
  )
}

export default App;
