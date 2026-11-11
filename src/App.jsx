
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Categories from './Pages/Categories';

// categories routes
import Productivity from './Pages/Categories/Productivity'
import TimeManagement from './Pages/Categories/TimeManagement';
import LearningSkills from './Pages/Categories/LearningSkills'
import CareerDevelopment from './Pages/Categories/CareerDevelopment'



import Contact from "./Pages/Contact";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsConditions from "./Pages/TermsConditions";
import ArticlePage from "./Pages/ArticlePage";



function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
         <Route path="/categories" element={<Categories />} />

            {/* categories routes */}
             <Route path="/categories/productivity" element={<Productivity />} />
                <Route path="/categories/time-management" element={<TimeManagement />} />
                <Route path="/categories/learning-skills" element={<LearningSkills/>} />
                  <Route path="/categories/career-development" element={<CareerDevelopment/>} />

         <Route path="/contact" element={<Contact />} />
       
              <Route  path="/privacy-policy" element={<PrivacyPolicy />}/>
               <Route path="/terms-conditions" element={<TermsConditions />}/>
               <Route path="/blog/:id" element={<ArticlePage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;