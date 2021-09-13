import React from "react";
import { formatPrice } from 'utils/formatters'

const Line = ({ car, selectCarToChange, deleteCar }) => {
    return (
        <tr>
            <td>{car.id}</td>
            <td>{car.model}</td>
            <td>{car.brand}</td>
            <td>{car.year}</td>
            <td>{formatPrice(car.price)}</td>
            <td className="column-actions">
                <button type="button" className="btn btn-default" onClick={selectCarToChange(car)}>
                    <i className="far fa-edit text-success mr-2" title="Alterar"></i>
                </button>

                <button type="button" className="btn btn-default" onClick={deleteCar(car)}>
                    <i className="fas fa-minus-circle text-danger" title="Excluir"></i>
                </button>
            </td>
        </tr>
    );
};

export default Line;