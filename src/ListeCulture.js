import React from 'react';
// import ReactDOM from 'react-dom';
import './listculture.css';
import Button from './components/Button';
import Input from './components/Input';

const ListeCulture = () => {
  return (
    <React.StrictMode>
      <div className="all">
              
                <div className="nav">
               
                </div>
               
              
            <div className="cont1">
            <Input type="text" name="recherche" placeholder="Effectuer des recherches"></Input>
               <Button btn='btn' valeur='Rechercher'/>
           
                     <h1>Liste des cultures</h1>




                     <table>
                            <tr>
                                <th>Parcelles</th>
                                <th>Cultures</th>
                                <th>Proprietaires</th>
                                
                               

                            </tr>

                            <tr>
                                <td>Description 1 : raisin, fraise, poire</td>
                                <td>grands cultures, fruitieres</td>
                                <td>Lala</td>
                                <Button btn='btn' valeur='Envoyer un message'/>
                            </tr>   
                            
                            <tr>
                                <td>Description 2 : cereales : riz, mais</td>
                                <td>arbocultures</td>
                                <td>Fetra</td>
                                <Button btn='btn' valeur='Envoyer un message'/>
                               
                            </tr>   

                            <tr>
                                <td>Description 3 : raisin, banane</td>
                                <td>fruitieres</td>
                                <td>Itokiana</td>
                                <Button btn='btn' valeur='Envoyer un message'/>
                                
                            </tr>   

                            <tr>
                                <td>Description 4 : legumes: pommes de terres, carottes, </td>
                                <td>grands cultures</td>
                                <td>Tiana</td>
                                <Button btn='btn' valeur='Envoyer un message'/>
                            </tr>   
                          
                     </table>
            </div>
        
            
      </div>
    </React.StrictMode>
  );
}
export default ListeCulture;