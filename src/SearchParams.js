import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from './Results.js';

const SearchParams = () => {
  // const location = "Seattle, WA";
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, updateBreeds] = useState([]);
  // const [animal, setAnimal] = useState('Cat');
  const [animal, AnimalDropdown] = useDropdown("Animal", "cat", ANIMALS);
  // const [breed, setBreed] = useState('');
  const [breed, BreedDropdown, updateBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    })

    setPets(animals || []);

    console.log(animals);
  }

  useEffect(() => {
    updateBreeds([]);
    updateBreed("");

    // breeds after .then is from the API
    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      updateBreeds(breedStrings);
    }, console.error);
  }, [animal, updateBreed, updateBreeds]);

  return (
    <div className='search-params'>
      <h1>{location}</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        requestPets();
      }}>
        <label htmlFor='location'>
          Location
          <input
            id='location'
            value={location}
            placeholder='Location'
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>

      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
