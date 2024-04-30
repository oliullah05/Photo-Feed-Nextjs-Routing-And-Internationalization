import React from 'react';
import PhotoCard from './PhotoCard';

const PhotoList = ({photos}) => {
    return (
        <div className='img-grid'>
           {
           photos.map(photo=><PhotoCard key={photo.id} photo={photo}></PhotoCard>)
           }
        </div>
    );
};

export default PhotoList;