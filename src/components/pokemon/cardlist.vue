<script setup lang="ts">
import Card from "@/components/pokemon/card.vue";
import type {Pokemon} from "@/interfaces/pokemon";

const props = defineProps<{
  pokemon: Pokemon[]
}>()

const emit = defineEmits<{
  (e: "detail", newName: String):void
}>()
const AddName = (newName: string) => emit('detail', newName)
</script>

<template>
  <h1>Liste de carte :</h1>
  <div class="listing">
    <Card v-for="pok in pokemon" :pokemon="pok" @detail="AddName"/>
  </div>

</template>

<style scoped lang="sass">
.listing
  display: flex
  flex-direction: row
  justify-content: space-around
  flex-wrap: wrap
</style>
