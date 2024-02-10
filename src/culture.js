import React from 'react';
import ReactDOM from 'react-dom';
import './login.css';
import Button from './components/Button';
import Input from './components/Input';
import reportWebVitals from './reportWebVitals';

const Login = () => {
  return (
    <React.StrictMode>
      <div className="all">
        <div className="container">
          <div className="formulaire"> 
            <p>  <Input type='email' name='email' placeholder='Entrez votre email'/> </p> 
            <p>  <Input type='password' name='email' placeholder='Entrez votre mot de passe'/>  </p>
          </div>
          <div className="bouton"> 
            <Button btn='btn' valeur='Se connecter'/>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}
export default Login;