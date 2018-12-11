import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      images: '',
      species: '',
      about: '',
      location: '',
    };
  }

  onNameChange = (event) => {
    console.log(`Name Field updated ${event.target.value}`);
    this.setState({
      name: event.target.value,
    });
  }
  onImagesChange = (event) => {
    // console.log(`Images Field updated ${event.target.value}`);
    this.setState({
      images: [event.target.value],
    });
  }
  onSpeciesChange = (event) => {
    // console.log(`Species Field updated ${event.target.value}`);
    this.setState({
      species: event.target.value,
    });
  }
  onAboutChange = (event) => {
    // console.log(`About Field updated ${event.target.value}`);
    this.setState({
      about: event.target.value,
    });
  }
  onLocationChange = (event) => {
    // console.log(`Location Field updated ${event.target.value}`);
    this.setState({
      location: event.target.value,
    });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.addPetCallback(this.state);
  }

  render() {
    return (
      <form
      className="new-pet-form"
      name="new-pet"
      id="new-pet"
      onSubmit={this.onSubmitHandler}>
      <h3>Add a Pet</h3>
      { /* A form should go here! */ }
      <div>
      <label htmlFor="name">Name:</label>
      <input
      name="name"
      value={this.state.name}
      onChange={this.onNameChange}
      />
      </div>
      <div>
      <label htmlFor="images">Images:</label>
      <input
      name="images"
      value={this.state.images}
      onChange={this.onImagesChange}
      />
      </div>
      <div>
      <label htmlFor="species">Species:</label>
      <input
      name="species"
      value={this.state.species}
      onChange={this.onSpeciesChange}
      />
      </div>
      <div>
      <label htmlFor="about">About:</label>
      <input
      name="about"
      value={this.state.about}
      onChange={this.onAboutChange} />
      </div>
      <div>
      <label htmlFor="location">Location:</label>
      <input
      name="location"
      value={this.state.location}
      onChange={this.onLocationChange} />
      </div>
      <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form>
    );
  }


}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;
