<script setup lang="ts">
import { computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { TITLE } from './constants';

const query = gql`
  query GetPokemons {
    pokemons(first: 1) {
      name
      types
      image
    }
  }
`;

const { refetch, result } = useQuery(query);

const name = computed(() => {
  console.log('result', result.value)
  return result.value?.pokemons[0].name ?? ""
});

const onClick = () => {
  refetch();
};
</script>

<template>
  <h1>{{ TITLE }}</h1>
  <div>
    <button @click="onClick">Refetch pokemons</button>
    <div>
      Pokemon name: <span>{{ name }}</span>
    </div>
  </div>
</template>
