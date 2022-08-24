import React from 'react'
import Car from '../../Images/Car.svg'
import Daniela from '../../Images/Daniela.png'
import Dariana from '../../Images/Dariana.png'
import Angie from '../../Images/Angie.png'
import CarCard from './components/CarCard'
import './AvailableCars.css'


const AvailableCars = () => {
    return (
        <div className="full-list">
            <div className="available">
                <h1>Autos disponibles</h1>
            </div>
            <img src={Car} className="Car-icon" alt="CarIcon" />
            <div className="car-list">
                <CarCard name="Daniela" image={Daniela} freePlaces={3}></CarCard>
                <CarCard name="Dariana" image={Dariana} freePlaces={3}></CarCard>
                <CarCard name="Angie" image={Angie} freePlaces={1}></CarCard>
            </div>


        </div>

    )
}

export default AvailableCars;