import React, { Component } from 'react';
import PetList from './components/PetList';
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import pets from './data/pets.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: undefined,
    };
  }

  onSelectPet = (petId) => {
    const pet = this.state.petList.find((pet) => {
      return pet.id === petId;
    })
    this.setState({
      currentPet: pet
    });
  }

  onRemovePet = (petId, petIndex) => {
    const pets = this.state.petList
    let currentPet = this.state.currentPet
    if (currentPet) {
      if (currentPet.id === petId) {
        currentPet = undefined;
      }
    }
    pets.splice(petIndex, 1);

    this.setState({
      petList: pets,
      currentPet: currentPet
    });
  }
  addNewPet = (newPet) => {
    const last = this.state.petList.length - 1
    let  petList = this.state.petList
    newPet.id = this.state.petList[last].id + 1
    petList.push(newPet)
    this.setState({
      petList: petList
    })
  }

  render() {
    const { currentPet } = this.state;

    return (
      <main className="App">
      <header className="app-header">
      <h1>Ada Pets</h1>
      </header>
      <section className="search-bar-wrapper">
      { /* Wave 4:  Place to add the SearchBar component */ }
      <SearchBar />
      </section>
      { /* Wave 2:  Where Pet Details should appear */ }
      {this.state.currentPet ? <PetDetails currentPet={currentPet}/> : ""}
      <section className="pet-list-wrapper">
      { /* Wave 1:  Where PetList should appear */ }
      <PetList
      pets={this.state.petList}
      onSelectPetCallback={this.onSelectPet}
      onRemovePetCallback={this.onRemovePet}
      />
      </section>
      <section className="new-pet-form-wrapper">
      { /* Wave 3:  Where NewPetForm should appear */ }
      <NewPetForm
      addPetCallback={this.addNewPet}
      />
      </section>
      </main>
    );
  }
}

export default App;
