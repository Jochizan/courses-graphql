import mongoose from 'mongoose';

(async () => {
  try {
    await mongoose.connect('mongodb://localhost/db-graphql', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true
    });
    console.log('>>> DB is connected');
  } catch (err) {
    console.error(err);
  }
})();
