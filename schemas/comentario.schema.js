import mongoose from 'mongoose';

const ComentarioSchema = new mongoose.Schema(
  {
    nome: String,
    conteudo: String,
  },
  { collection: 'post' }
);

export default ComentarioSchema;
