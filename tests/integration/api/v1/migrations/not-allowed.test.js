import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

test("NOT ALLOWED methods to api/v1/migrations should return 405", async () => {
  const deleteResponse = await fetch(
    "http://localhost:3000/api/v1/migrations",
    {
      method: "DELETE",
    },
  );
  expect(deleteResponse.status).toBe(405);

  const patchResponse = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "PATCH",
  });
  expect(patchResponse.status).toBe(405);

  const putResponse = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "PUT",
  });
  expect(putResponse.status).toBe(405);

  const headResponse = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "HEAD",
  });
  expect(headResponse.status).toBe(405);

  const optionsResponse = await fetch(
    "http://localhost:3000/api/v1/migrations",
    {
      method: "OPTIONS",
    },
  );
  expect(optionsResponse.status).toBe(405);
});
