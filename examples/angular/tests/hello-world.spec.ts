import { expect, test } from "vitest";
import { HelloWorld } from "../src/hello-world";
import { render, screen } from "@testing-library/angular";
test("renders name", async () => {
  await render(HelloWorld, {
    inputs: {
      name: "Vitest",
    },
  });
  expect(await screen.findByRole("heading")).toHaveTextContent(
    "Hello, Vitest!",
  );
});
