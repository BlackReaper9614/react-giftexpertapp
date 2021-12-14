import React, { useState } from 'react';
import CategoryAdd from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';
    // const categories = ['One punch', 'SAmurai X', 'Dragon ball'];

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);
    // se tiene que crear un nuevo arreglo ya que si se modifica el que se pasa, se escribe el estado inicial.
    // const handleAdd = () => { setcategories( [...categories, 'Perro Avisa XD'] )}

    return(
        <>
            <h2>GifExpertApp</h2>

            <CategoryAdd setCategories={ setCategories }  />

            <hr/>
            
            {/* <button onClick={ handleAdd }> Agregar </button> */}
            
            <ol>
                {
                    categories.map( category =>
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    )
                }
            </ol>
        </>
    );
}

export default GifExpertApp;
