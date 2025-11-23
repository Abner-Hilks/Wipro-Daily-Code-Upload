const request = require("supertest");
const { expect } = require("chai");
const app = require("../../src/app");

describe("User Integration Tests", () => {

  it("GET /api/users → should return users", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.be.an("array");
  });

  it("POST /api/users → should validate", async () => {
    const res = await request(app)
      .post("/api/users")
      .send({}); // Missing name → should fail

    expect(res.statusCode).to.equal(400);
    expect(res.body.error).to.equal("Name required");
  });

});
