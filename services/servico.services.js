import ServicoRepository from '../repositories/servico.repository.js';

async function createServico(servico) {
  return await ServicoRepository.createServico(servico);
}

async function getServicos(proprietarioId) {
  if (proprietarioId) {
    return await ServicoRepository.getServicosPorProprietario(proprietarioId);
  }
  return await ServicoRepository.getServicos();
}

export default {
  createServico,
  getServicos,
};
