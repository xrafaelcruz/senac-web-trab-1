import { useState, useMemo, memo } from "react";
import { formatPrice } from 'utils/formatters'

const Resume = memo(function({ carList }) {
    const [show, setShow] = useState(false)

    const priceSum = useMemo(() => {
        if (carList.length) {
            return carList.reduce((prev, car) => {
                const prevNumber = prev ? prev : 0
                return prevNumber + Number(car.price);
            }, 0);
        }

        return 0;
    }, [carList])

    const toggleResume = () => {
        setShow(!show);
    }

    const buttonLabel = show ? 'Fechar resumo' : 'Resumo';

    return (
        <div className="mb-2">
            <button type="button" className="btn btn-info mb-2" onClick={toggleResume}>
                {buttonLabel}
            </button>

            {show && (
                <ul className="list-group">
                    <li className="list-group-item">Total de carros cadastrados: {carList.length}</li>
                    <li className="list-group-item">Soma de todos os preços: {formatPrice(priceSum)}</li>
                </ul>
            )}
        </div>
    )
});

export default Resume;