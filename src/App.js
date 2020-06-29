import React from 'react';
import { render } from 'react-dom';

import './styles/main.scss'

import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

const LOGIN = gql`
  mutation LoginMutation(
    $email: String!
    $password: String!
  ) {
    user {
      email
    } 
  }
`

const App = () => {
  const [ login ] = useMutation(LOGIN)
  

  return (
        <div>
          <LoginPage />
          <HomePage />
          <h2>Inside</h2>
        </div>
  );
}

export default App;
