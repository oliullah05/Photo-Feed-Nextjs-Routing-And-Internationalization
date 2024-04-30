import React from 'react';
import PhotoDetails from '@/components/PhotoDetails';
const PhotoDetailsPage = ({params:{id,lang}}) => {
    return (
        <div>
            <PhotoDetails id={id} lang={lang}></PhotoDetails>
        </div>
    );
};

export default PhotoDetailsPage;