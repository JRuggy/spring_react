import './App.css';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
// import { Switch } from 'react-router';
import { Routes, Route } from "react-router-dom";
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <div className='container'>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route path="/" element={<ListEmployeeComponent/>} />
            {/* <Route path='/employee' element={ListEmployeeComponent} /> */}
          </Routes>
        </div>
        <FooterComponent />
      </div>


























      {/* <Router>
            <Switch>
              <Route path="/" component={ListEmployeeComponent}></Route>
              <Route path="/employess" component={ListEmployeeComponent}></Route>
              <ListEmployeeComponent />
            </Switch>
      </Router> */}
    </div>
  );
}

export default App;
