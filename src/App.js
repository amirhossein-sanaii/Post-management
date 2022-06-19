import { Link ,Outlet } from 'react-router-dom';

import './App.css';

import { Navbar } from './component/index'



function App() {
  return (
    <>
    <div className="App">
      <h1>Post management</h1>
      <hr/>
      <Navbar/>
    <Outlet/>
    </div>
    </>
    )
}

export default App;
