import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import PhotoForm from '../../components/PhotoForm'

const PHOTOS = gql`
  {
    photos {
      id
      description
    } 
  }
`


const UploadPage = () => {
    console.log("uploooooading")

    // // const { loading, error, data } = useQuery(PHOTOS)
    // console.log(loading)
    // console.log(error)
    // console.log(data)

    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const today = new Date;
    console.log(today)

    return (
        <div className="upload-page-container">
            <div>
                <h2>
                    Add a photo
                    <br/>
                    for <span className="today">{today.toLocaleDateString("en-UK", dateOptions)}</span>
                </h2>
                <PhotoForm />
            </div>
        </div>
    )
}

export default UploadPage;