import React,  { useState } from "react";
import { Container, Form,  SubContainerSign } from "./styles";
import Input from "../../components/Input";
import Botao from "../../components/Botao";
import { useHistory, Link } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios'


function Login(){
    const history = useHistory();
    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: [],

    });

    const handleInput = (e) =>{
        e.persist();
        setLogin({...loginInput, [e.target.name]: e.target.value});

    }

    const loginSubmit = (e) =>{
        e.preventDefault();

        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('api/login', data).then(res =>{
                if(res.data.status === 200){
                    
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    swal("Success",res.data.message,"Sucesso");
                    history.push('/');
                   
                } else if(res.data.status === 401){
                    swal("Warning",res.data.message,"warning");

                } else {
                setLogin({...loginInput, error_list: res.data.validation_errors  }); 
                }

            });
        });
    }
    return (
        <Container>
          <Form onSubmit={loginSubmit}>
            <h1>Faça o seu Login</h1>
            <Input
              name='email'
              placeholder='Digite o seu e-mail'
              onChange={handleInput}
              value={loginInput.email}
              type='email'
            />
            <Input
             name='password'
             placeholder='Digite a sua senha'
             onChange={handleInput}
             value={loginInput.password}
              type='password'
            />
            <Botao
              type='submit'
              text='Entrar!'
            />
            <SubContainerSign>
              <p>Não possui conta?</p>
              <Link to="/register">Cadastrar</Link>
            </SubContainerSign>
          </Form>
        </Container>
        
      )
    }

export default Login;

