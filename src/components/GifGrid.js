// import React, { useState, useEffect } from 'react';
import { GiftGridItem } from './GiftGridItem';
import { useFecthGifs } from "../hooks/useFecthGifs";

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFecthGifs( category );
 
    return (
        <>
            <h3> { category } </h3>

            { loading && <p>Loading...</p> }

            <div className='card-grid'>    
                {   
                    images.map( img =>( 
                        <GiftGridItem 
                            key = { img.id }
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}
