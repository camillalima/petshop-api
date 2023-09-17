import AnimalRepository from '../repositories/animal.repository.js';

async function createAnimal(animal) {
  return await AnimalRepository.insertAnimal(animal);
}

async function updateAnimal(animal) {
  return await AnimalRepository.updateAnimal(animal);
}

async function deleteAnimal(id) {
  return await AnimalRepository.deleteAnimal(id);
}

async function getAnimais() {
  return await AnimalRepository.getAnimais();
}

async function getAnimal(id) {
  return await AnimalRepository.getAnimal(id);
}

async function getAnimalPorProprietario(id) {
  return await AnimalRepository.getAnimalPorProprietario(id);
}

export default {
  createAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimais,
  getAnimal,
  getAnimalPorProprietario,
};
