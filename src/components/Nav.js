import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div classname='navigation'>
      <Link to="/accueil">Accueil</Link>

      {/* Crée un lien vers la page Statistique */}
      <Link to="/statistique">Statistique</Link>

    </div>
  );
}

export default Nav;