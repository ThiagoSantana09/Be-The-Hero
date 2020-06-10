import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'; 
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import './styles.css';
import api from '../../services/api';

export default class Login extends Component{
  constructor(props){
    super(props);
    this.state ={
      id: '',
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  async handleLogin(e){
    e.preventDefault();
    
    try {
      const { id } = this.state;
      const response = await api.post('login', { id });
      localStorage.setItem('ongID',id);
      localStorage.setItem('ongName',response.data.name);
      this.props.history.push('/profile');  
    } catch (error) {
      alert('Falha no login, tente novamente');
    }
    
  }

  render(){
    return (
      <div className="login-container">
        <section className="form">
          <img src={logoImg} alt="Logo"/>
          <form onSubmit={this.handleLogin}>
            <h1>Faça seu Logon</h1>
            <input placeholder="Sua ID" value={this.state.id}
            onChange={(e) => this.setState({ id: e.target.value})} />
            <button type="submit" className="button">Entrar</button>
            <Link className="back-link"to="/register">
              <FiLogIn size={16} color="#E02041"/> 
              Não tenho cadastro
            </Link>
          </form>
        </section>
        <img src={heroesImg} alt="Heroes"/>
      </div>
    );
  }
}