// 1. Retrieve all readings for a specific meter (e.g., MTR001)
db.energy_readings.find({ meterId: "MTR001" }).pretty();

// 2. Find readings between two timestamps
db.energy_readings.find({
  timestamp: {
    $gte: ISODate("2025-10-29T10:00:00Z"),
    $lte: ISODate("2025-10-29T12:00:00Z")
  }
}).pretty();
