import React, { useState, useEffect, useCallback } from "react";
import { NotificationManager } from 'react-notifications';
import Line from './Line';
import './styles.css'

const Table = ({ carList, setCarList, setSelectedCar, filter }) => {
    const [list, setList] = useState(carList)
    const [notFound, setNotFound] = useState(false);

    const selectCarToChange = (car) => () => {
        setSelectedCar(car)
    }

    const deleteCar = (car) => () => {
        if (window.confirm(`Confirma a exclusão do veículo "${car.id}"?`)) {
            const newCarList = carList.filter(item => item.id !== car.id);

            localStorage.setItem('cars', JSON.stringify(newCarList));
            setCarList(newCarList);

            NotificationManager.success(`ID: ${car.id}`, 'Veículo removido com Sucesso!');
        }
    }

    const filterCars = useCallback(() => {
        const filtereds = carList.filter(car => 
            car.id.toString().includes(filter) || 
            car.model.includes(filter) || 
            car.brand.includes(filter) ||
            car.year.includes(filter) ||
            car.price.includes(filter)
        );

        if (filtereds.length) {
            setNotFound(false);
        } else {
            setNotFound(true);
        }

        return filtereds; 
    }, [carList, filter])

    useEffect(() => {
        if (filter) {
            setList(filterCars());
        } else {
            setList(carList)
            setNotFound(false);
        }
    }, [filter, carList, filterCars]);

    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Modelo</th>
                        <th>Marca</th>
                        <th>Ano</th>
                        <th>Preço R$</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(car => (
                        <Line 
                            key={car.id}
                            car={car}
                            selectCarToChange={selectCarToChange}
                            deleteCar={deleteCar}
                        />
                    ))}

                    {notFound &&
                        <tr>
                            <td colSpan="6">Nenhum resultado foi encontrado</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;