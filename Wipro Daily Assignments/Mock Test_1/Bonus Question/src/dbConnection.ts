import { MongoClient } from "mongodb";

const uri = ("mongodb+srv://arpitmahalle21:SRIPSummer@cluster0.1jqmevq.mongodb.net/EventDB");
const client = new MongoClient(uri);

export async function connectDB() {
  try {
    await client.connect();
    console.log(" MongoDB Connected Successfully");
    return client.db("EventDB");
  } catch (err) {
    console.error(" Connection Error:", err);
    throw err;
  }
}
