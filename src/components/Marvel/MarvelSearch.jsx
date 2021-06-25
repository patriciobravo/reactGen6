import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';


const MarvelSearch = ({ setHeroe }) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        setHeroe(data => [inputValue]);
        setInputValue('')
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="col-sm-6 col-xs-1">
                <Form.Label>Nombre Heroe</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese Nombre de Heroe de Marvel"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Button variant="primary ml-3 btn-sm" type="submit">
                Buscar
            </Button>
        </Form>
    )
}
MarvelSearch.propTypes = {
    setCategories: PropTypes.func.isRequired
}
export default MarvelSearch;