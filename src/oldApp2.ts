import * as express from 'express';
import {MongoClient, ObjectId} from 'mongodb';
import * as  graphqlHTTP from 'express-graphql';
import  { buildSchema } from 'graphql';
const app = express();
const MONGO_URL = 'mongodb://localhost:27017';
const mongoClient = new MongoClient(MONGO_URL, { useNewUrlParser: true });

mongoClient.connect(function(err, client){
    const db = client.db('neuroTradeDatasets');
    const Datasets = db.collection("datasets");
    const Examples = db.collection("examples");
    console.log(Datasets.findOne())

    const schema = buildSchema(`
      type Query {
        getDataset(_id:String): Dataset
        getDatasets:[Dataset]
      }

      type Dataset {
        decription: String
        date: String
        _id: String
        examples:[Example]
      }

      type Example {
        _id: String
        datasetId: String
        averagePrice: Int,
        changePercent: Int,
        upOrDown: Int,
        howFar:Int,
        forWeek: Int,
        forMonth: Int,
        for3Month: Int,
        for6Month: Int,
        forYear: Int
      }

      input ExampleInput {
        averagePrice: Int,
        changePercent: Int,
        upOrDown: Int,
        howFar:Int,
        forWeek: Int,
        forMonth: Int,
        for3Month: Int,
        for6Month: Int,
        forYear: Int
      }

      type Mutation {
        createDataset(description:String, examples:[ExampleInput]):Dataset
      }

      type schema {
        query: Query
        mutation: Mutation
      }
    `);

    // The root provides a resolver function for each API endpoint
    const root = {
      getDataset: (ID) => {
        return Datasets.findOne(new ObjectId("5c40fb7218c4d95771a6c591"));
      },
      getDatasets:() => {
        return Datasets.find().toArray()
      }
    };
    app.use('/graphql', graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    }));
});


//const Datasets = db.collection('datasets');
//const Examples = db.collection('examples');

    // Construct a schema, using GraphQL schema language

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
