import './App.css';
import { Routes, Route } from "react-router-dom";
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<ListEmployeeComponent />} />
      </Routes>
      <FooterComponent />
    </div>
  )
}

export default App;
