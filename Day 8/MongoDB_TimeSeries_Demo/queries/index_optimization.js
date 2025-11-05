// 8. Create an index on timestamp
db.energy_readings.createIndex({ timestamp: 1 });

// 9. Create a compound index on meterId + timestamp
db.energy_readings.createIndex({ meterId: 1, timestamp: 1 });

// 10. Check all indexes on the collection
db.energy_readings.getIndexes();
