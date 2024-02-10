import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    const lienStyle={
        color:'green',

    }
    return(
        <div className='menu1'>
            <Link to="/accueil" style={lienStyle}> Voir Accueil</Link>
        </div>
    );

};

export default Menu;