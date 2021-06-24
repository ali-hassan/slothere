import React from 'react';
import { ResponsiveImage } from '../../components';
import './ListingImages.css';
export default function ListingImages(props) {
  const { firstImage, title, secondImage,listing } = props;
  return (



      <div className="grid">
      <ResponsiveImage alt={title} image={secondImage} variants={['scaled-small']} />
    </div>
 
  );
}
