<template>
  <div class="grid grid-cols-12">
    <div v-for="asso in assos" class="col-span-4" >
      <AssosCard :title="asso.nom" :description="asso.activites" :image="asso.img" :site="asso.url" :donate="asso.donate_url"/>
    </div>
  </div>
</template>
<script setup lang="js">
import axios from "axios";
import {onMounted, ref} from "vue";
import AssosCard from "@/components/Assos/AssosCard.vue";

let assos = ref([])


onMounted(async () => {
  assos.value = await getAssos()
})

async function getAssos() {
  const raw = await axios.get('http://localhost:3000/assos');
  return await raw.data
}

</script>