import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

describe("GET to initial page", () => {
  describe("Anonymous user", () => {
    test("Retrieving the initial page", async () => {
      const response = await fetch("http://localhost:3000");
      expect(response.status).toBe(200);
    });
  });
});
