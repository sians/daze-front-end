import React, { useState, useCallback } from 'react'

import FileUpload from '../FileUpload';
import IconButton from '../IconButton';
import TextField from '../TextField';

import uploadIcon from '../../assets/icons/upload.svg'

const PhotoForm = () => {
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [city, setCity] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');

    const handleChangeTitle = useCallback((value) => {
        setTitle(value.target.value)
    }, [])

    const handleChangeDescription = useCallback((value) => {
        setDescription(value.target.value)
    }, [])
    
    const handleChangeCity = useCallback((value) => {
        setCity(value.target.value)
    }, [])
    
    const handleChangeLat = useCallback((value) => {
        setLat(value.target.value)
    }, [])
    
    const handleChangeLng = useCallback((value) => {
        setLng(value.target.value)
    }, [])    

    const handleSubmitForm = useCallback(() => {
        console.log("form submits at some point")
      }, [])

    const handleKeyPress = useCallback((e) => {
        if (e.key === 'Enter') {
          handleSubmitForm()
        }
      }, [handleSubmitForm])

  return (
    <div className="photo-form" onKeyPress={handleKeyPress}>
        <div className="file-upload">
            <FileUpload />
        </div>
        <form>
            <div className="field">
                <TextField 
                    value={title}
                    type="text"
                    placeholder="title"
                    onChange={handleChangeTitle}
                />
            </div>

            <div className="field">
                <TextField 
                    value={description}
                    type="text"
                    placeholder="description"
                    onChange={handleChangeDescription}
                />
            </div>

            <div className="field">
                <TextField 
                    value={city}
                    type="text"
                    placeholder="city"
                    onChange={handleChangeCity}
                />
            </div>

            <div className="field">
                <TextField 
                    value={lat}
                    type="number"
                    placeholder="latitude"
                    onChange={handleChangeLat}
                />
            </div>                        

            <div className="field">
                <TextField 
                    value={lng}
                    type="number"
                    placeholder="longitude"
                    onChange={handleChangeLng}
                />
            </div>

            <div className='submit-field'>
                <div className={`submit-btn ${title !== '' ? 'active' : ''}`}>
                    <div>+</div>
                </div>
            </div>

        </form>
    </div>
  )
}

export default PhotoForm
