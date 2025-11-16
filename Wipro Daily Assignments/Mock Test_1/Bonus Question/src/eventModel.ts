import { connectDB } from "./dbConnection";

interface Event {
  title: string;
  category: string;
  date: string;
  description: string;
}

// CREATE
export async function createEvent(event: Event) {
  const db = await connectDB();
  const result = await db.collection("events").insertOne(event);
  console.log(" Event Created:", result.insertedId);
}

// READ
export async function getEvents() {
  const db = await connectDB();
  const events = await db.collection("events").find().toArray();
  console.log(" Events:", events);
  return events;
}

// UPDATE
export async function updateEvent(title: string, updates: Partial<Event>) {
  const db = await connectDB();
  const result = await db.collection("events").updateOne({ title }, { $set: updates });
  console.log(" Updated:", result.modifiedCount);
}

// DELETE
export async function deleteEvent(title: string) {
  const db = await connectDB();
  const result = await db.collection("events").deleteOne({ title });
  console.log(" Deleted:", result.deletedCount);
}
