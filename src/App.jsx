import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Cookies from 'js-cookie';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { News } from './pages/News';
import { Example_new } from './pages/Example_new';
import { Notes } from './pages/Notes';
import { Forum } from './pages/Forum';
import { LogIn } from './components/LogIn';
import { UserBox } from './components/UserBox';
import { Help } from './pages/Help';
import { UserPage } from './pages/UserPage';
import TopicPage from './pages/TopicPage';

function App() {
  const [isLoggedIn, setLogIn] = useState(false);
  const [topics, setTopics] = useState([]);
  console.log("login state: " + Cookies.get('login'));
  if (Cookies.get('login') == undefined) {
    Cookies.set('login', JSON.stringify(false));
  }

  useEffect(() => {
    const loginCookie = Cookies.get('login');
    if (loginCookie === JSON.stringify(true)) {
      setLogIn(true);
    }
  }, []);

  const doLogin = () => {
    if (isLoggedIn) {
      setLogIn(false);
      Cookies.set('login', JSON.stringify(false));
      window.location.reload();
    } else {
      setLogIn(true);
      Cookies.set('login', JSON.stringify(true));
    }
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/notes" element={<Notes />} />
        <Route
          path="/forum"
          element={<Forum setTopics={setTopics} loginToken={isLoggedIn} />} // Pass loginToken prop
        />
        <Route path="/forum/:topicId" element={<TopicPage topics={topics} />} />
        <Route path="/noticia_exemplo" element={<Example_new />} />
        <Route path="/help" element={<Help />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
      {isLoggedIn ? (
        <UserBox onClick={() => doLogin()} />
      ) : (
        <LogIn onClick={() => doLogin()} />
      )}
    </div>
  );
}

export default App;
