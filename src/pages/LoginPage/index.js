import React, { useState, useRef } from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const LoginPage = () => {
  const email = useRef(null);
  const password = useRef(null);

  const LOGIN = gql`
    mutation($email: String!, $password: String!) {
        userLogin(
            email: $email
            password: $password
        ) 
        {
            credentials {
                accessToken
                client
                uid
            }
        }
    }
`

  return (
      <Mutation
        mutation={LOGIN}
      >
        {
          (userLogin, { loading: authenticating }) =>
            authenticating ? (
              "..."
            ) : (
              <div>
                <form
                  onSubmit={event => {
                    event.preventDefault();
                    userLogin({
                      variables: { email: email.current.value, password: password.current.value}
                    }).then(( { data : { userLogin : { credentials : {accessToken, uid, client} } } }) => {
                        // console.log(accessToken)
                        // console.log(uid)
                        // console.log(client)

                      if (accessToken) {
                        localStorage.setItem("access-token", accessToken);
                        localStorage.setItem("uid", uid);
                        localStorage.setItem("client", client);
                      }
                    });
                  }}
                >
                  <input
                    ref={email}
                    type="email"
                    placeholder="your email"
                  />
                  <input
                    ref={password}
                    type="password"
                    placeholder="*****"
                  />
                  <input
                    type="submit"
                    value="Sign in"
                  />
                </form>
              </div>
            )
        }
      </Mutation>
  )
}

export default LoginPage;

