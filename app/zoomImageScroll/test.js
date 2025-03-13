import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ZoomImageScroll = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('https://your-aem-instance/content/your-endpoint.json');
                setImages(response.data.images);
            } catch (error) {
                console.error('Error fetching images from AEM:', error);
            }
        };

        fetchImages();
    }, []);

    return (
        <div className="zoom-image-scroll">
            {images.map((image, index) => (
                <div key={index} className="image-container">
                    <img src={image.src} alt={image.alt} />
                </div>
            ))}
        </div>
    );
};

export default ZoomImageScroll