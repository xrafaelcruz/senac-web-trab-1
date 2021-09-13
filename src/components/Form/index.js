import React, { useEffect, memo } from "react";
import { useForm } from "react-hook-form";
import { NotificationManager } from 'react-notifications';
import Errors from './Errors'

const currentYear = new Date().getFullYear();

const Form = memo(function({ carList, setCarList, selectedCar, setSelectedCar }) {
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();

    useEffect(() => {
        if (selectedCar) {
            setValue('model', selectedCar.model);
            setValue('brand', selectedCar.brand);
            setValue('year', selectedCar.year);
            setValue('price', selectedCar.price);
        }
    }, [selectedCar, setValue])

    const createCar = (newCar) => {
        newCar.id = new Date().getTime();

        const newCarList = [...carList, newCar];

        localStorage.setItem('cars', JSON.stringify(newCarList));
        setCarList(newCarList);

        reset();
        NotificationManager.success('', 'Veículo criado com Sucesso!');
    }

    const updateCar = (updatedCar) => {
        if (!carList.length) {
            reset();
            setSelectedCar(null);
            NotificationManager.error('', 'Esse veículo não existe mais!');
            
            return null;
        }

        // deep clone
        const newCarList = JSON.parse(JSON.stringify(carList));

        const carIndex = newCarList.findIndex(car => car.id === selectedCar.id);
        newCarList[carIndex] = { ...newCarList[carIndex], ...updatedCar };

        localStorage.setItem('cars', JSON.stringify(newCarList));
        setCarList(newCarList);

        reset();
        setSelectedCar(null);
        NotificationManager.success(`ID: ${newCarList[carIndex].id}`, 'Veículo alterado com Sucesso!');
    }

    const cancelUpdate = () => {
        reset();
        setSelectedCar(null);
    }

    const onSubmit = (data) => {
        if (selectedCar) {
            updateCar(data);
            return null;
        }

        createCar(data);
    }

    return (
        <form className="container needs-validation" onSubmit={handleSubmit(onSubmit)}>
            {selectedCar && 
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <div className="alert alert-info m-0" role="alert">
                            Alterando o veículo de modelo: {selectedCar.model}
                        </div>
                    </div>
                </div>
            }

            <div className="form-row">
                <div className="form-group col-md-6 col-sm-6">
                    <label htmlFor="model">Modelo</label>
                    <input
                        autoFocus
                        id="model"
                        type="text"
                        className={`form-control ${errors.model && 'is-invalid'}`}
                        {...register("model", { required: true, minLength: 2, maxLength: 30 })}
                    />
                    <Errors error={errors.model} field="model" />
                </div>            
                
                <div className="form-group col-md-6 col-sm-6">
                    <label htmlFor="brand">Marca</label>
                    <select
                        id="brand"
                        className={`form-control ${errors.brand && 'is-invalid'}`}
                        {...register("brand", { required: true })}
                    >
                        <option value="">Selecione</option>
                        <option value="Chevrolet">Chevrolet</option>
                        <option value="Fiat">Fiat</option>
                        <option value="Ford">Ford</option>
                        <option value="Renault">Renault</option>
                        <option value="Volkswagen">Volkswagen</option>
                    </select>
                    <Errors error={errors.brand} field="brand" />
                </div>
    
                <div className="form-group col-md-6 col-sm-6">
                    <label htmlFor="year">Ano</label>
                    <input
                        id="year"
                        type="number"
                        className={`form-control ${errors.year && 'is-invalid'}`}
                        {...register("year", { required: true, min: currentYear - 30, max: currentYear + 1 })}
                    />
                    <Errors error={errors.year} field="year" />
                </div>            
                
                <div className="form-group col-md-6 col-sm-6">
                    <label htmlFor="price">Preço R$</label>
                    <input
                        id="price"
                        type="number"
                        step="0.01"
                        className={`form-control ${errors.price && 'is-invalid'}`}
                        {...register("price", { required: true, min: 5000, max: 100000 })}
                    />
                    <Errors error={errors.price} field="price" />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-12 d-flex justify-content-center align-items-center">
                    <input
                        type="submit"
                        value="Criar"
                        className={selectedCar ? "d-none" : "btn btn-primary"}
                    />
                    
                    <input
                        type="submit"
                        value="Alterar"
                        className={selectedCar ? "btn btn-success" : "d-none"}
                    />

                    <input
                        type="button"
                        value="Cancelar"
                        onClick={cancelUpdate}
                        className={selectedCar ? "btn btn-default" : "d-none"}
                    />
                </div>
            </div>  
        </form>
    );
});

export default Form;
