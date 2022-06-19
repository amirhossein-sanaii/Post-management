import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';

import { App , Posts , Aboutme , Post  } from './component/index'

import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App/>}>
            <Route path='/Posts' element={<Posts/>}>
            <Route path=':postId' element={<Post/>} />
            </Route>
            <Route path='/About' element={<Aboutme/>}/>
          </Route>


          <Route path='*' element={
            <h1 style={{textAlign:"center"}}>404</h1>
          }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

