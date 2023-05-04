import './App.css'
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { News } from './pages/News';
import { Notes } from './pages/Notes';
import { LogIn } from './components/LogIn';
import { UserBox } from './components/UserBox';
import { useState } from 'react';
import { Help } from './pages/Help';

function App() {
  const [isLoggedIn,setLogIn] = useState(false);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/notes' element={<Notes/>} />
        <Route path='/help' element={<Help />} />
      </Routes>
      {isLoggedIn ? <UserBox onClick={() => {setLogIn(false)}}/> : <LogIn onClick={() => {setLogIn(true)}}/>}
    </div>
    
  )
}

export default App
