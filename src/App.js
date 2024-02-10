import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//import {  Switch } from 'react-router-dom';
import Accueil from './accueil';
import Statistique from './statistique';
import Menu from './components/menu';

const App = () => {
  return (
    <Router>
      <Routes>
        <Menu/>
      {/* <Switch> */}
        
        {/* <Route path="/statistique" component={Statistique} /> */}
        <Route path="/accueil" element={<Accueil/>} />
        <Route path="/statistique" element={<Statistique/>} />
      {/* </Switch> */}
      </Routes>
    </Router>
  );
}

export default App;