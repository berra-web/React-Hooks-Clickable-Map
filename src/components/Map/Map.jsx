import React from 'react'
import map from './coords.json';
import world from './map.jpg';
import ImageMapper from 'react-image-mapper';
export default function Map({handleSelectCountry}) {
    return (
        <div>
            <ImageMapper 
            src={world} 
            map={map}
            width={800}
            imgWidth={1000} 
            onClick={(e) => handleSelectCountry(e.name)}/>
        </div>
    )
}
