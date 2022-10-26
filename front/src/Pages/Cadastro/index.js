import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory, Link } from 'react-router-dom';
import Input from "../../components/Input";
import Botao from "../../components/Botao";
import { Container, Form, SubContainerSign } from "./styles";


function Register() {

  const history = useHistory();
  const [registerInput, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  }

  const registerSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: registerInput.name,
      email: registerInput.email,
      password: registerInput.password,
    }
    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post('/api/user', data).then(res => {
        if (res.data.status === 200) {

          localStorage.setItem('auth_token', res.data.token);
          localStorage.setItem('auth_nome', res.data.username);
          swal("Success", res.data.message, "success");
          history.push('/');

        } else {
          setRegister({ ...registerInput, error_list: res.data.validation_errors });
        }

      });
    });

  }

  return (
    <Container>
      <Form onSubmit={registerSubmit}>
        <h1>Faça o seu Cadastro</h1>
        <Input
          name='name'
          placeholder='Digite o seu nome'
          onChange={handleInput}
          value={registerInput.name}
          type='text'

        />

        <Input
          name='email'
          placeholder='Digite o seu e-mail'
          onChange={handleInput}
          value={registerInput.email}
          type='email'
        />
        <Input
          name='password'
          placeholder='Digite a sua senha'
          onChange={handleInput}
          value={registerInput.password}
          type='password'
        />
        <Botao
          type='submit'
          text='Efetuar Cadastro!'
        />
        <SubContainerSign>
          <p>Já possui conta?</p>
          <Link to="/login">Login</Link>
        </SubContainerSign>
      </Form>
    </Container>

  )
}

export default Register;