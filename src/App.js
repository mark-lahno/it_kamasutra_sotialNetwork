import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Content from './components/Content/Content';
import Settings from './components/Settings/Settings';


const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        {/* <Profile /> */}
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/Profile/*" element={<Profile />} />
            <Route path="/Dialogs/*" element={<Dialogs />} />
            <Route path="/News/*" element={<News />} />
            <Route path="/Content/*" element={<Content />} />
            <Route path="/Settings/*" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
