import { MongoClient, ServerApiVersion } from "mongodb";

// uri
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@my-hello-project.srgj5os.mongodb.net/?appName=My-Hello-Project`;

// client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// db and collection
let db;

export const connectDB = async () => {
  try {
    await client.connect();
    db = client.db("Kiddomart-Project-Management");
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
    return db;
  } catch (err) {
    console.error("Mongodb not connected", err.message);
    throw new Error("Database connection failed");
  }
};

// Users
export const getUsers = async () => {
  const database = await connectDB();
  return database.collection("users");
};

// Feedbacks
export const getFeedbacks = async () => {
  const database = await connectDB();
  return database.collection("feedbacks");
};