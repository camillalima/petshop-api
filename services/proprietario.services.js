import ProprietarioRepository from '../repositories/proprietario.repository.js';
import AnimalService from './animal.service.js';

async function createProprietario(proprietario) {
  return await ProprietarioRepository.insertProprietario(proprietario);
}

async function updateProprietario(proprietario) {
  return await ProprietarioRepository.updateProprietario(proprietario);
}

async function deleteProprietario(id) {
  let animaisProprietario = await AnimalService.getAnimalPorProprietario(id);

  if (animaisProprietario.any) {
    throw new Error('Existem animais cadastrados para esse proprietario.');
  }

  return await ProprietarioRepository.deleteProprietario(id);
}

async function getProprietarios() {
  return await ProprietarioRepository.getProprietarios();
}

async function getProprietario(id) {
  return await ProprietarioRepository.getProprietario(id);
}

export default {
  createProprietario,
  updateProprietario,
  deleteProprietario,
  getProprietarios,
  getProprietario,
};
