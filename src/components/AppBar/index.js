import React from 'react'
import './styles.css'

const AppBar = () => {
  return (
    <div className="row">
      <div className="col-sm-12 bg-dark py-2 d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-white">
          Revenda Cruz - Veículos Novos e Usados
        </h1>

        <h4 className="text-white font-italic">
          Sistema de Cadastro e Manutenção de Veículos Disponíveis para Venda
        </h4>

        <img
          src="images/carros.png"
          alt="Revenda Cruz"
          className="img-fluid mx-auto d-block car m-5"
        />
      </div>
    </div>
  );
}

export default AppBar;