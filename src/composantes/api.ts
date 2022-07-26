import {ref} from "vue";

export function UsePokemon(){
    const data = ref(null)
    const error = ref(null)

    fetch('https://restapi.fr/api/vue3users').then((res) => res.json())
        .then(json => (data.value = json)).catch(err => error.value = err)

    return {data , error}
}
