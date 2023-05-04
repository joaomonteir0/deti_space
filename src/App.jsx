import './App.css'
import Navbar from './components/Navbar';
import {Route,Routes} from 'react-router-dom';
import { Home } from './pages/Home';
import { News } from './pages/News';
import { Notes } from './pages/Notes';
import {LogIn} from './components/LogIn';
import  {UserBox} from './components/UserBox';

function App() {
  let isLogin = false;
  return (
    <div>
      {/* <h1>Oi</h1> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/notes' element={<Notes/>} />
      </Routes>
      {isLogin ? <UserBox /> : <LogIn />}
    </div>
    
  )
}

export default App
