//import { connect } from './db.js';
import Animal from '../models/animal.model.js';
import Proprietario from '../models/proprietarios.model.js';

async function insertAnimal(animal) {
  try {
    return await Animal.create(animal);
  } catch (err) {
    throw err;
  }
  /*const conn = await connect();

  try {
    const sql =
      'INSERT INTO animais (nome, tipo, proprietario_id) VALUES ($1 , $2, $3) RETURNING *';
    const values = [animal.nome, animal.tipo, animal.proprietario_id];

    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }*/
}

async function updateAnimal(animal) {
  try {
    await Animal.update(animal, {
      where: { animalId: animal.animalId },
    });
    return await getAnimal(animal.animalId);
  } catch (err) {
    throw err;
  }
  /*const conn = await connect();

  try {
    const sql =
      'UPDATE animais SET nome = $1, tipo = $2, proprietario_id = $3 WHERE animal_id = $4 RETURNING *';
    const values = [
      animal.nome,
      animal.tipo,
      animal.proprietario_id,
      animal.animal_id,
    ];

    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }*/
}

async function deleteAnimal(id) {
  try {
    await Animal.destroy({ where: { animalId: id } });
  } catch (err) {
    throw err;
  }
  /*const conn = await connect();
  await conn.query('DELETE FROM animais WHERE animal_id = $1', [id]);
  try {
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }*/
}

async function getAnimais() {
  try {
    return await Animal.findAll();
  } catch (err) {
    throw err;
  }
  /*const conn = await connect();

  try {
    const res = await conn.query('SELECT * FROM animais');
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }*/
}

async function getAnimal(id) {
  try {
    return await Animal.findByPk(id);
  } catch (err) {
    throw err;
  }
  /*const conn = await connect();

  try {
    const res = await conn.query('SELECT * FROM animais WHERE animal_id = $1', [
      id,
    ]);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }*/
}

async function getAnimalPorProprietario(id) {
  try {
    return await Animal.findAll({
      where: {
        proprietarioId: id,
      },
      include: [
        {
          model: Proprietario,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
  /*const conn = await connect();

  try {
    const res = await conn.query(
      'SELECT * FROM animais WHERE proprietario_id = $1',
      [id]
    );
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }*/
}

export default {
  insertAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimais,
  getAnimal,
  getAnimalPorProprietario,
};
