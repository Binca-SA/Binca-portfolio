import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './views/home/Home'
import About from './views/about/About';
// import Home from '/';
import Archive from './views/archive/Archive';
import Header from './components/header/Header';
import NoMatch from './views/nomatch/NoMatch';


function App() {
  return <>
	<Header></Header> 
	<main>
			<Routes>
				
        <Route path="/" element={<Home />} />
				
        <Route path="/about" element={<About />} />
				
        <Route path="/archive" element={<Archive />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
	</main>
  <footer></footer>
</>;
  
}

export default App;
