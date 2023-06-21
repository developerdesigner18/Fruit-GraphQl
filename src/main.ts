import mongoose from 'mongoose';
import { createApolloServer } from './interfaces/graphql/grpahqlServer';
const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3000;

async function startServer() {
  await mongoose.connect(`${process.env.MONGO_URL}`, {
  }).then(()=>{
    console.log('Connected to MongoDB')
  }).catch((error)=>{
    console.log(error.message,'...mongoerror');
  })
  const apolloServer = createApolloServer();
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}

startServer().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/graphql`);
  });
}).catch((error) => {
  console.error('Error starting the server:', error);
});
