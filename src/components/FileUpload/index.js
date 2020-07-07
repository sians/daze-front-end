import React, { useCallback } from 'react';
import { Mutation } from 'react-apollo';
import Dropzone from 'react-dropzone';
import gql from 'graphql-tag';

import IconButton from '../IconButton';
import uploadIcon from '../../assets/icons/upload.svg'


const uploadPhotoMutation = gql`
  {
    photos {
      id
      description
    } 
  }
`



const FileUpload = () => (
  <Mutation
    mutation={uploadPhotoMutation}
    context={{ hasUpload: true }}
    onCompleted={data => {
      console.log("completed")
      console.log(data)
    }}
  >
    {(uploadPhotoMutation, { loading }) => (
      <Dropzone 
        onDrop={(files) => uploadPhoto({variables: {image: files[0]}})}
        accept="image/*"
        multiple={false}
      >

      {({getRootProps, getInputProps}) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <IconButton icon={uploadIcon} classNames="upload-icon"/>
            </div>
          </section>
        )}

      </Dropzone>
    )}


  </Mutation>
);
export default FileUpload;