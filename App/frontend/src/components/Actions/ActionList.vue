<template>
  <h1 class="text-xl accent-purple-900">Toutes les actions: </h1>

  <DataView :value="actions" paginator :rows="maxRows" :rows-per-page-options="rowsOptions">
    <template #list="slotProps">
      <div class="grid">
        <div v-for="(item, index) in slotProps.items" :key="index" class="col-span-12">
          <div class="p-card h-32">
            <div class="flex flex-row justify-between">
              <div class="flex flex-col justify-center items-start p-8">
                <div class="p-card-subtitle">
                  {{ item.asso }}
                </div>
                <div class="p-card-title">
                  {{ item.title }}
                </div>
              </div>
              <Divider layout="vertical"/>
              <div class="flex flex-row justify-center items-center p-8">
                <Button icon="pi pi-globe" @click="navigate(item.url)"></Button>
              </div>
            </div>
          </div>
          <Divider/>
        </div>
      </div>
    </template>
  </DataView>


</template>


<script setup lang="js">
import axios from "axios";
import {onMounted, ref} from "vue";


let actions = ref([]);
let maxRows = ref(5);
const rowsOptions = ref([5, 10, 20, 50])

const url = 'http://localhost:3000/actions';

import DataView from "primevue/dataview";
import Button from "primevue/button";
import Divider from "primevue/divider";


onMounted(async () => {
  actions.value = await getActions(url);
})

async function getActions(url) {
  const rawActions = await axios.get(url);
  return await rawActions.data;
}

function navigate(url) {
  window.open(url, "_blank")
}
</script>
