import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './views/home/Home'
import About from './views/about/About';
// import Home from '/';
import Archive from './views/archive/Archive';
import Header from './components/header/Header';
import NoMatch from './views/nomatch/NoMatch';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Frontend from './components/project-frontend/Frontend';
import ProjectGraphic from './components/project-graphic/ProjectGraphic';




function App() {
  return <>
	<Header></Header> 
	<main>
			<Routes>
				
        <Route path="/" element={<Home />} />
				<Route path='/:category/:id' element={<Frontend />}/>
        <Route path='/:category/:id' element={<ProjectGraphic />}/>

        <Route path="/about" element={<About />} />
				
        <Route path="/archive" element={<Archive />} />

        <Route path="*" element={<NoMatch />} />

      </Routes>
	</main>
  <Contact></Contact>
  <Footer></Footer>
</>;
}

export default App;
