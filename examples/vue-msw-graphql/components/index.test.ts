import {
  expect,
  test,
  describe,
  beforeAll,
  afterEach,
  afterAll,
  vi,
} from "vitest";
import Index from "./index.vue";
import { worker } from "../mock/worker";
import { render } from "vitest-browser-vue";
import { createApolloProvider } from "../mock/createApolloProvider";

const { provideApollo } = createApolloProvider();

vi.mock("./constants.ts", () => ({
  TITLE: 'Cool Pokemons',
}));

describe("Index.vue", () => {
  beforeAll(async () => {
    await worker.start({
      // intercepts imports that should've already been imported
      // TODO: figure out why, but for now just ignore it
      onUnhandledRequest: 'bypass'
    });
  });

  afterEach(async () => {
    worker.resetHandlers();
  });

  afterAll(async () => {
    worker.stop();
  });

  test("Pokemon Query is successfully mocked", async () => {
    const component = render(Index, {
      global: {
        provide: provideApollo(),
      },
    });

    await expect.element(component.getByText("Cool Pokemons")).toBeInTheDocument();
    await expect.element(component.getByText("Mocked Pokemon")).toBeInTheDocument();
  });
});
