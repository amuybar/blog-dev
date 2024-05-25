import React from 'react';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import BlogDetail from './pages/BlogDetail';


function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<BlogPage/>}/>
          <Route path="/blog/:slug" element={<BlogDetail/>} />
    </Routes>
   </Router>
   
   </>
  );
}

export default App;
