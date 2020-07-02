import React from 'react';
import { render } from 'react-dom';

import './styles/main.scss'

import { useQuery, useMutation } from '@apollo/react-hooks';
// import { gql } from 'apollo-boost';
import gql from 'graphql-tag';

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

const ME = gql`
  query me {
    me {
      id
      username
    }
  }
`

const App = () => {
  // const [ loading, error, data ] = useQuery(ME);


  console.log(localStorage)
  // console.log(me)

  return (
        <div>
          <LoginPage />
          <HomePage />
          <h2>Inside</h2>
        </div>
  );
}

export default App;
