<template>


  <div class="flex flex-col items-center">
    <AutoComplete v-model="autoCompleteValue" multiple :suggestions="filteredDictionary" @complete="search"/>
    <DataView :value="getFilteredActions(autoCompleteValue)" paginator :rows="6">
      <template #list="slotProps">
        <div class="grid gap-10 grid-cols-12">
          <div v-for="(item, index) in slotProps.items" :key="index" class="col-span-4">
            <ActionCard :titre="item.title" :image="getImage(item)" :description="item.summary" :url="item.url"/>
          </div>
        </div>
      </template>
    </DataView>

  </div>


</template>

<script setup lang="js">
import axios from "axios";
import {computed, onMounted, ref} from "vue";
import ActionCard from "@/components/Actions/ActionCard.vue";
import DataView from "primevue/dataview";
import AutoComplete from "primevue/autocomplete";

let autoCompleteValue = ref('');
let autoCompleteDictionary = ref([]);
let actions = ref([])
let assos = ref([])
const filteredDictionary = ref()
let filteredActions = ref([]);

function getFilteredActions(arr) {
  if (arr.length > 0) {
    return actions.value.filter((el) => {
      return arr.every(w => el.all_text.includes(w));
    });
  }
  else return actions.value
}


const search = (event) => {
  if (!event.query.trim().length) {
    filteredDictionary.value = getUniqueKeyWords();
  } else {
    filteredDictionary.value = autoCompleteDictionary.value.filter((val) => {
      return val.startsWith(event.query)
    })
  }
};


onMounted(async () => {
  actions.value = await getActions();
  assos.value = await getAssos();
  autoCompleteDictionary.value = getUniqueKeyWords();
})

async function getActions() {
  const raw = await axios.get('http://localhost:3000/actions');
  return await raw.data
}


async function getAssos() {
  const raw = await axios.get('http://localhost:3000/assos');
  return await raw.data
}

function getImage(currentAction) {
  const filtered = assos.value.filter((element) => {
    return element.nom === currentAction.asso
  })

  return filtered[0].img
}

function getKeyWords() {
  let arr = [];
  for (let action of actions.value) {
    arr.push(...JSON.parse(action.key_words));
  }
  return arr
}

function getUniqueKeyWords() {
  let keywords = getKeyWords();
  const uniqueKeywords = [...new Set(keywords)];
  return (uniqueKeywords.sort((a, b) => a - b))
}


</script>