import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';
import './db';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
    context: {
      messageId: 'test'
    }
  })
);

app.get('/', (req, res) => {
  res.send('<h4>Welcome application</h4>');
});

app.listen(PORT, () => {
  console.log('Server up');
  console.log('Listen http://localhost:%d', PORT);
});
