import React from 'react';
import Header from './components/header';
import About from './section/about';
import Skills from './section/skills';
import Education from './section/education';
import Project from './section/project';

const App = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow ml-64 p-8">

        <About />

        <Skills />

        <Education />

        <Project />

        
      
      </main>
      
    </div>
  );
};





export default App;