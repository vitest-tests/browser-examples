import { graphql, HttpResponse } from "msw";

export const handlers = [
  graphql.query("GetPokemons", () => {
    console.log('get pokemons returned')
    return HttpResponse.json({
      data: {
        // Convert all posts to an array
        // and return as the "posts" root-level property.
        pokemons: [
          {
            name: "Mocked Pokemon",
            types: ["Grass", "Poison"],
            image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
            __typename: "Pokemon",
          },
        ],
      },
    });
  }),
];
