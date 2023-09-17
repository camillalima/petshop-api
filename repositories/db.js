import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  //'postgres://htfjhisu:hakcBVFV4IV8EjTKfbwsa4v4C05PQdLt@batyr.db.elephantsql.com/htfjhisu',
  'postgres://fshiniuh:9YnoJmLY6yEY-nZf2cuKLFuLeRhVuoai@baasu.db.elephantsql.com/fshiniuh',
  {
    dialect: 'postgres',
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;

/*import pg from 'pg';

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }
  const pool = new pg.Pool({
    connectionString:
      'postgres://htfjhisu:hakcBVFV4IV8EjTKfbwsa4v4C05PQdLt@batyr.db.elephantsql.com/htfjhisu',
  });
  global.connection = pool;
  return pool.connect();
}

export { connect };*/
