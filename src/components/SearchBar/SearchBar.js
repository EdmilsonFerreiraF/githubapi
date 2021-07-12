import React from 'react';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useForm } from "../../hooks/useForm"
import { goToSearch } from '../../routes/coordinator';

const SearchBar = () => {
    const history = useHistory()
    const {form, onChange} = useForm({ search: "" })

    const handleInputChange = (event) => {
        const {value, name} = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        goToSearch(history, form.search)
    }

    return (
        <Form.Group className="row gx-0 col-8 col-md-5 col-lg-4">
            <Form.Control type="search" className="col" id="formGroupExampleInput" placeholder="Search" name="search" onChange={handleInputChange} value={form.search} aria-label="Search"/>
            <Button variant="outline-success" className="col-3 col-sm-2" onClick={handleSubmission}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>        
            </Button>
        </Form.Group>
    )
}

export default SearchBar;