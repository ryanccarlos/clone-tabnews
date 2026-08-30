import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

describe("NOT ALLOWED METHODS api/v1/migrations", () => {
  describe("Anonymous user", () => {
    test("DELETE method", async () => {
      const response = await fetch("http://localhost:3000/api/v1/migrations", {
        method: "DELETE",
      });
      expect(response.status).toBe(405);
    });

    test("PATCH method", async () => {
      const response = await fetch("http://localhost:3000/api/v1/migrations", {
        method: "PATCH",
      });
      expect(response.status).toBe(405);
    });

    test("PUT method", async () => {
      const response = await fetch("http://localhost:3000/api/v1/migrations", {
        method: "PUT",
      });
      expect(response.status).toBe(405);
    });

    test("HEAD method", async () => {
      const response = await fetch("http://localhost:3000/api/v1/migrations", {
        method: "HEAD",
      });
      expect(response.status).toBe(405);
    });

    test("OPTIONS method", async () => {
      const response = await fetch("http://localhost:3000/api/v1/migrations", {
        method: "OPTIONS",
      });
      expect(response.status).toBe(405);
    });
  });
});
