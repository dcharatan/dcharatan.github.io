import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './features/header/Header';
import Projects from './features/pages/Projects';
import Research from './features/pages/Research';
import Resume from './features/pages/Resume';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Route exact path="/research" component={Research} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
      </HashRouter>
    </div>
  );
}

export default App;
