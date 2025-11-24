require("dotenv").config();
const app = require("./app");
const sequelize = require("./config/sequelize");

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Sequelize connected");

    await sequelize.sync({ alter: true });
    console.log("Sequelize models synced");

    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  } catch (error) {
    console.error("Error:", error);
  }
})();
