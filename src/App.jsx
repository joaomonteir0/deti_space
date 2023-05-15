import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { News } from './pages/News';
import { Example_new } from './pages/Example_new';
import { Notes } from './pages/Notes';
import { Forum } from './pages/Forum';
import { LogIn } from './components/LogIn';
import { UserBox } from './components/UserBox';
import { useState } from 'react';
import { Help } from './pages/Help';
import { UserPage } from './pages/UserPage';
import TopicPage from './pages/TopicPage';

function App() {
  const [isLoggedIn, setLogIn] = useState(false);
  const [topics, setTopics] = useState([]); // Define the topics state variable

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/notes" element={<Notes isLoggedIn={isLoggedIn} />} />
        <Route path="/forum" element={<Forum setTopics={setTopics} />} /> {/* Pass setTopics as a prop */}
        <Route path="/forum/:topicId" element={<TopicPage topics={topics} />} />
        <Route path="/noticia_exemplo" element={<Example_new />} />
        <Route path="/help" element={<Help />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
      {isLoggedIn ? (
        <UserBox onClick={() => setLogIn(false)} />
      ) : (
        <LogIn onClick={() => setLogIn(true)} />
      )}
    </div>
  );
}

export default App;
