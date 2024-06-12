import React from 'react';
import './App.css';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import BlogDetails from './pages/BlogDetails';
import SignUp from './pages/SignUp';
import CreateBlog from './pages/CreateBlog';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
          <Routes>
              <Route exact path="/" element={<Page1 />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/blog/:index" element={<BlogDetails />} />
              <Route path="/create-blog" element={<CreateBlog/>}/>
          </Routes>
    </Router>
  );
}

export default App;