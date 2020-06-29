import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';


const PHOTOS = gql`
  {
    photos {
      id
      description
    } 
  }
`


const HomePage = () => {

    const { loading, error, data } = useQuery(PHOTOS)
    console.log(data)


    return (
        <div>
            Home yay
        </div>
    )
}

export default HomePage;