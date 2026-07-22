import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

test("GET to INITIAL PAGE should return  200", async () => {
  const response = await fetch("http://localhost:3000");
  expect(response.status).toBe(200);
});
