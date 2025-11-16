// DB_Connectivity.ts
import mysql from "mysql2/promise";

interface Event {
  id?: number;
  title: string;
  category: string;
  date: string;
  description: string;
}

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "root", // use your password
  database: "eventdb",
};

// Create connection helper
async function connectDB() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log("MySQL Connected Successfully");
    return connection;
  } catch (err) {
    console.error("Database Connection Failed:", err);
    throw err;
  }
}

// CREATE: Insert new event
async function createEvent(event: Event) {
  const connection = await connectDB();
  const query = `
    INSERT INTO events (title, category, date, description)
    VALUES (?, ?, ?, ?)
  `;
  const [result]: any = await connection.execute(query, [
    event.title,
    event.category,
    event.date,
    event.description,
  ]);
  console.log(`Event Created: ID ${result.insertId}`);
  await connection.end();
}

// READ: Fetch all events
async function readEvents() {
  const connection = await connectDB();
  const [rows] = await connection.execute("SELECT * FROM events");
  console.log("Events:", rows);
  await connection.end();
}

// UPDATE: Modify event details
async function updateEvent(id: number, updatedData: Partial<Event>) {
  const connection = await connectDB();
  const query = `
    UPDATE events
    SET title = ?, category = ?, date = ?, description = ?
    WHERE id = ?
  `;
  const [result]: any = await connection.execute(query, [
    updatedData.title,
    updatedData.category,
    updatedData.date,
    updatedData.description,
    id,
  ]);
  console.log(`Updated Rows: ${result.affectedRows}`);
  await connection.end();
}

// DELETE: Remove event by ID
async function deleteEvent(id: number) {
  const connection = await connectDB();
  const [result]: any = await connection.execute(
    "DELETE FROM events WHERE id = ?",
    [id]
  );
  console.log(`Deleted Rows: ${result.affectedRows}`);
  await connection.end();
}

// Run CRUD operations sequentially
async function runCRUD() {
  try {
    // CREATE
    await createEvent({
      title: "AI Tech Conference",
      category: "Tech",
      date: "2025-12-15",
      description: "Exploring AI advancements in industry",
    });

    // READ
    await readEvents();

    // UPDATE
    await updateEvent(1, {
      title: "AI & Robotics Summit",
      category: "Tech",
      date: "2025-12-20",
      description: "AI + Robotics integration for innovation",
    });

    // DELETE
    await deleteEvent(1);
  } catch (err) {
    console.error("CRUD Operation Failed:", err);
  }
}

// Execute all CRUD
runCRUD();
