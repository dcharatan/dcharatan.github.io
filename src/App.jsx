import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './features/header/Header';
import Research from './features/pages/Research';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Route exact path="/research" component={Research} />
      </HashRouter>
    </div>
  );
}

export default App;
