import React from "react";

const currentYear = new Date().getFullYear();

const Errors = ({ error, field }) => (
    <div className="invalid-feedback">
        {error && error.type === 'required' && (
            <>Campo obrigatório</>
        )}

        {error && field === 'model' && error.type !== 'required' && (
            <>Modelo deve conter de 2 a 30 caracteres</>
        )}

        {error && field === 'year' && error.type !== 'required' && (
            <>Ano deve ser preenchido (entre {currentYear - 30} e {currentYear + 1})</>
        )}

        {error && field === 'price' && error.type !== 'required' && (
            <>Preço deve ser preenchido (entre 5000 e 100000);</>
        )}
    </div>
);

export default Errors;
