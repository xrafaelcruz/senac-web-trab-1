import React from 'react'

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
      </div>
    </div>
  );
}

export default AppBar;