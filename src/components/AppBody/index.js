import React, { useState, useEffect } from 'react'
import Form from 'components/Form';
import Resume from 'components/Resume';
import Search from 'components/Search';
import Table from 'components/Table';

const AppBody = () => {
  const [selectedCar, setSelectedCar] = useState();
  const [carList, setCarList] = useState([]);
  const [filter, setFilter] = useState();

  useEffect(() => {
    const storageCars = localStorage.getItem('cars');
    setCarList(storageCars ? JSON.parse(storageCars) : []);
  }, []);

  return (
    <div className="row">
        <div className="col-md-4 col-sm-12 col-xs-12 mt-2 d-flex justify-content-center align-items-start">
          <Form 
            carList={carList}
            setCarList={setCarList} 
            selectedCar={selectedCar} 
            setSelectedCar={setSelectedCar} 
          />
        </div>

        <div className="col-md-8 col-sm-12 col-xs-12 mt-2 d-flex justify-content-start align-items-start flex-column">
          <Resume carList={carList} />

          <Search setFilter={setFilter} />

          <Table 
            carList={carList}
            setCarList={setCarList}
            setSelectedCar={setSelectedCar}
            filter={filter}
          />
        </div>
    </div>
  )
}

export default AppBody;