<script setup lang="ts">
import Cardlist from "@/components/pokemon/cardlist.vue";
import {pokemon_data} from "@/data/data";
import {reactive, ref} from "vue";
import Carddetail from "@/components/pokemon/carddetail.vue";
import type {Pokemon} from "@/interfaces/pokemon";

const state = reactive<{
  pokemon: Pokemon[]
}>({
  pokemon: pokemon_data
})

const name = ref<string>("")


const addName = (newName: string) => name.value = newName
const removeName = () => name.value = ""
function filtre_pokemon(){
  state.pokemon = pokemon_data.filter(pokemon => pokemon.name.toLowerCase().includes("bul"))
}

</script>

<template>
  <h1>Page d'accueil</h1>
  <div>
    <input type="text" name="filter" @input="filtre_pokemon">
  </div>
  <div v-if="!name">
    <Cardlist :pokemon="state.pokemon" @detail="addName"/>
  </div>
  <div v-else>
    <template v-for="pok in state.pokemon">
      <Carddetail v-if="pok.name === name" :pokemon="pok" @remove="removeName"/>
    </template>

  </div>

</template>

<style scoped lang="sass"></style>
