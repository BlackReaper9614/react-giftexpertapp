import { useState } from "react";
import PropTypes from 'prop-types';

export const CategoryAdd = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState( '' );

    const handleInputChange = ( e ) => { 
        setInputValue( e.target.value ) 
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [ inputValue, ...cats ] );
            setInputValue('');            
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <label htmlFor="newCategory">Nueva categoria:</label>
            <input 
                id="newCategory" 
                name="newCategory"
                value={ inputValue}
                onChange= { handleInputChange }
            /> 
            <button> Agregar </button>
        </form>
    )
}

export default CategoryAdd;

CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
}