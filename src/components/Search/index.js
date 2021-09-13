import React from "react";
import { useForm } from "react-hook-form";

const Search = ({ setFilter }) => {
    const { register, setValue } = useForm();

    const clearField = () => {
        setValue('search', '');
        setFilter(null);
    }

    const updateFilter = (e) => {
        setFilter(e.target.value);
    }

    return (
        <div className="form-row">
            <div className="form-group col-md-9">
                <label htmlFor="search">Buscar</label>
                <input
                    id="search"
                    type="text"
                    className="form-control"
                    {...register('search')}
                    onChange={updateFilter}
                />
            </div>     
            <div className="form-group col-md-3 d-flex justify-content-center align-items-end">
                <input
                    type="button"
                    value="Limpar"
                    onClick={clearField}
                    className="btn btn-secondary"
                />
            </div>         
        </div>  
    );
};

export default Search;
