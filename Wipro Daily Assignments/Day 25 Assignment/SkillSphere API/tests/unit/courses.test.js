const chai = require("chai");
const request = require("supertest");
const app = require("../../src/app");

const { expect } = chai;

describe("Course API Unit Tests", () => {

  it("GET /api/courses → should return list", async () => {
    const res = await request(app).get("/api/courses");
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.be.an("array");
  });

  it("POST /api/courses → should create a course", async () => {
    const res = await request(app)
      .post("/api/courses")
      .send({ name: "React", duration: "6 weeks" });

    expect(res.statusCode).to.equal(201);
    expect(res.body.name).to.equal("React");
  });

});
