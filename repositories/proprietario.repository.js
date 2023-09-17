//import { connect } from './db.js';
import Proprietario from '../models/proprietarios.model.js';

async function insertProprietario(proprietario) {
  try {
    return await Proprietario.create(proprietario);
  } catch (err) {
    throw err;
  }
  /*const conn = await connect();

  try {
    const sql =
      'INSERT INTO proprietarios (nome, telefone) VALUES ($1 , $2) RETURNING *';
    const values = [proprietario.nome, proprietario.telefone];

    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }*/
}

async function updateProprietario(proprietario) {
  try {
    await Proprietario.update(proprietario, {
      where: { proprietarioId: proprietario.proprietarioId },
    });
    return await getProprietario(proprietario.proprietarioId);
  } catch (err) {
    throw err;
  }
  /*const conn = await connect();

  try {
    const sql =
      'UPDATE proprietarios SET nome = $1, telefone = $2 WHERE proprietario_id = $3 RETURNING *';
    const values = [
      proprietario.nome,
      proprietario.telefone,
      proprietario.proprietario_id,
    ];

    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }*/
}

async function deleteProprietario(id) {
  try {
    await Proprietario.destroy({ where: { proprietarioId: id } });
  } catch (err) {
    throw err;
  }
  /*const conn = await connect();
  await conn.query('DELETE FROM proprietarios WHERE proprietario_id = $1', [
    id,
  ]);
  try {
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }*/
}

async function getProprietarios() {
  try {
    return await Proprietario.findAll();
  } catch (err) {
    throw err;
  }
  /*const conn = await connect();

  try {
    const res = await conn.query('SELECT * FROM proprietarios');
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }*/
}

async function getProprietario(id) {
  try {
    return await Proprietario.findByPk(id);
  } catch (err) {
    throw err;
  }
  /*const conn = await connect();

  try {
    const res = await conn.query(
      'SELECT * FROM proprietarios WHERE proprietario_id = $1',
      [id]
    );
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }*/
}

export default {
  insertProprietario,
  updateProprietario,
  deleteProprietario,
  getProprietarios,
  getProprietario,
};
