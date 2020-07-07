import React, { useState } from 'react';

import './styles/main.scss'

// import { gql } from 'apollo-boost';
import gql from 'graphql-tag';

import { BrowserRouter } from 'react-router-dom';
import Router from './navigation/Router';

import Bar from './components/Bar';

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
  const [pathName, setPathName] = useState('')
  const handleRoutePathName = (pathName) => {
    setPathName(pathName)
  }

  console.log(localStorage)
  // console.log(me)

  return (
        <BrowserRouter>
          <div className="app-content">
            <Router />
            <Bar />
          </div>
        </BrowserRouter>
  );
}

export default App;
