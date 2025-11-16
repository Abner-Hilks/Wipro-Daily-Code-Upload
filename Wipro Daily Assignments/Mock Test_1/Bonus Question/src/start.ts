import { createEvent, getEvents, updateEvent, deleteEvent } from "./eventModel";

const demoEvent = {
  title: "AI Tech Summit",
  category: "tech",
  date: "2025-12-10",
  description: "A global AI innovation conference"
};

async function main() {
  try {
    await createEvent(demoEvent);                         // Create
    await getEvents();                                   // Read
    await updateEvent("AI Tech Summit", { date: "2025-12-12" }); // Update
    await deleteEvent("AI Tech Summit");                 // Delete
  } catch (err) {
    console.error("Error:", err);
  }
}

main();
