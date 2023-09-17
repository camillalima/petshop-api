import Servico from '../models/servico.model.js';
import Animal from '../models/animal.model.js';

async function createServico(servico) {
  try {
    return await Servico.create(servico);
  } catch (err) {
    throw err;
  }
}

async function getServicos() {
  try {
    return await Servico.findAll();
  } catch (err) {
    throw err;
  }
}

async function getServicosPorProprietario(proprietarioId) {
  try {
    return await Servico.findAll({
      include: [
        {
          model: Animal,
          where: {
            proprietarioId,
          },
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

export default {
  createServico,
  getServicos,
  getServicosPorProprietario,
};
