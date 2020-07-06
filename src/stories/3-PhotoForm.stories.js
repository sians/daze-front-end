import React from 'react';
import { action } from '@storybook/addon-actions';
import PhotoForm from '../components/PhotoForm';

export default {
  title: 'PhotoForm',
  component: PhotoForm,
};

export const DefaultPhotoForm = () => <PhotoForm />;
