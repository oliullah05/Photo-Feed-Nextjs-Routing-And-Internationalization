import Modal from '@/components/Modal';
import PhotoDetails from '@/components/PhotoDetails';
import React from 'react';

const PhotoModal = ({params:{id,lang}}) => {
    return (
        <Modal><PhotoDetails id={id} lang={lang}></PhotoDetails></Modal>
    );
};

export default PhotoModal;