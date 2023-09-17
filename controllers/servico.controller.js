import ServicoService from '../services/servico.services.js';

async function createServico(req, res, next) {
  let servico = req.body;

  try {
    if (!servico.descricao || !servico.valor || !servico.animalId) {
      throw new Error('Descricao, Valor e Animal ID são obrigatórios.');
    }

    servico = await ServicoService.createServico(servico);

    res.send(servico);
    logger.info(`POST /servico - ${JSON.stringify(servico)}`);
  } catch (err) {
    next(err);
  }
}

async function getServicos(req, res, next) {
  try {
    res.send(await ServicoService.getServicos(req.query.proprietarioId));
    logger.info('GET /servico');
  } catch (err) {
    next(err);
  }
}

export default {
  createServico,
  getServicos,
};
