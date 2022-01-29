import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import GalleryApp from './pages/GalleryApp';
function App() {
  return (
    <Router>
      <main className="App">
        <Switch>
          <Route component={GalleryApp} path="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
