import logo from './logo.svg';
import './App.css';
import Sideebar from './Sideebar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './sb-admin-2.css'
import './fontawesome-free/css/all.min.css'
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import User from './User';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div>
        <div id="wrapper">

          <Sideebar></Sideebar>
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Topbar></Topbar> 
              <Routes>
                <Route path="/Dashboard" element={<Dashboard/>}></Route>
                <Route path="/User" element={<User/>}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
