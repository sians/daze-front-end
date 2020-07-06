import React, { useCallback } from 'react';
import Dropzone from 'react-dropzone';

import IconButton from '../IconButton';
import uploadIcon from '../../assets/icons/upload.svg'


const FileUpload = () => (
    <Dropzone onDrop={() => console.log("file dropped!")} >

      {({getRootProps, getInputProps}) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <IconButton icon={uploadIcon} classNames="upload-icon"/>
            </div>
          </section>
        )}

    </Dropzone>
);
export default FileUpload;