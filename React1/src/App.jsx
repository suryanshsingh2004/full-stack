import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./login";
import Table from "./table";
//import HomePage  from "./home";
import Counter from "./counter";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/table" element={<DataTable />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
// Import the MongoClient class from the mongodb package
const { MongoClient } = require('mongodb');

// Define the URI for connecting to MongoDB
const uri = "mongodb://localhost:27017"; // Change if your MongoDB server is running elsewhere

// Define the database and collection names
const dbName = 'mydatabase';
const collectionName = 'mycollection';

async function run() {
    // Create a new MongoClient instance
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Connect to the MongoDB server
        await client.connect();
        console.log("Connected to MongoDB");

        // Select the database and collection
        const database = client.db(dbName);
        const collection = database.collection(collectionName);

        // Insert a document into the collection
        const insertResult = await collection.insertOne({ name: "Alice", age: 25 });
        console.log(`New document inserted with _id: ${insertResult.insertedId}`);

        // Query all documents in the collection
        const documents = await collection.find().toArray();
        console.log("Documents in collection:", documents);

    } catch (error) {
        console.error("Error occurred:", error);
    } finally {
        // Close the connection
        await client.close();
    }
}

// Execute the function
run().catch(console.error);
