// 3. Total energy consumption per meter
db.energy_readings.aggregate([
  { $group: { _id: "$meterId", totalEnergy: { $sum: "$energy_kWh" } } }
]);

// 4. Average temperature by location
db.energy_readings.aggregate([
  { $group: { _id: "$location", avgTemp: { $avg: "$temperature_C" } } }
]);

// 5. Hourly energy consumption trend
db.energy_readings.aggregate([
  {
    $group: {
      _id: { hour: { $hour: "$timestamp" }, meter: "$meterId" },
      totalEnergy: { $sum: "$energy_kWh" }
    }
  },
  { $sort: { "_id.hour": 1 } }
]);

// 6. Compare average energy usage across meters
db.energy_readings.aggregate([
  { $group: { _id: "$meterId", avgEnergy: { $avg: "$energy_kWh" } } },
  { $sort: { avgEnergy: -1 } }
]);

// 7. Detect high usage hours (> 6 kWh)
db.energy_readings.aggregate([
  { $match: { energy_kWh: { $gt: 6 } } },
  { $project: { meterId: 1, timestamp: 1, energy_kWh: 1, _id: 0 } }
]);
