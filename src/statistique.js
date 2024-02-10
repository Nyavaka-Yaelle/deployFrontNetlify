import React from 'react';
// import ReactDOM from 'react-dom';
import './statistique.css';
// import Button from './components/Button';
// import Input from './components/Input';
// import reportWebVitals from './reportWebVitals';

const Statistique = () => {
  return (
    <React.StrictMode>
      <div className="all">
                <div className="nav">

                </div>
            <div className="cont1">
                     <h1>Statistiques terrain/utilisateur</h1>
                     <table>
                            <tr>
                                <th>Terrain</th>
                                <th>Client</th>
                            </tr>

                            <tr>
                                <td>Terrain</td>
                                <td>Client</td>
                            </tr>   
                            
                            <tr>
                                <td>Terrain</td>
                                <td>Client</td>
                            </tr>
                        

                            <tr>
                                <td>Terrain</td>
                                <td>Client</td>
                            </tr>   
                            
                            <tr>
                                <td>Terrain</td>
                                <td>Client</td>
                            </tr>
                     </table>
            </div>
        
            
      </div>
    </React.StrictMode>
  );
}
export default Statistique;