// src/components/gallery/Gallery.tsx
import React, { useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import styles from './gallery.module.css';

const Gallery: React.FC = () => {
  const images = Array.from({ length: 58 }, (_, i) => `/src/img/1 (${i + 1}).jpg`);

  return (
    <PhotoProvider>
      <div className={styles.galleryContainer}>
        <div className={styles.grid}>
          {images.map((image, index) => (
            <PhotoView key={index} src={image}>
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className={styles.gridItem}
              />
            </PhotoView>
          ))}
        </div>
      </div>
    </PhotoProvider>
  );
};

export default Gallery;
