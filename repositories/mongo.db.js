import mongoose from 'mongoose';

async function connect() {
  const uri =
    'mongodb+srv://camillabatista:1234@store.4sgeztq.mongodb.net/?retryWrites=true&w=majority';
  return await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export { connect };
