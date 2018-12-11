import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';


import 'bootstrap/dist/css/bootstrap.min.css';

const getCards = (props) => {
  return props.pets.map( (pet, index) =>{
    return (
      <PetCard
      id={pet.id}
      name={pet.name}
      species={pet.species}
      about={pet.about}
      location= {pet.location}
      onSelectPetCallback={props.onSelectPetCallback}
      onRemovePetCallback={props.onRemovePetCallback}
      key={pet.id}
      index={index}
      />
    )
  } );
}

const PetList = (props) => {

  return (
    <div className="card-group">
    {getCards(props)}
    </div>
  )
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPetCallback: PropTypes.func
};

export default PetList;
