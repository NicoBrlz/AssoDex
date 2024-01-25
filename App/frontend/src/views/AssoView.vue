<script setup>
import MainComponent from "@/components/MainComponent.vue";
import Assos from "@/components/Assos/Assos.vue";
</script>

<template>

  <MainComponent/>
  <div class="flex flex-col items-center justify-center h-screen m-12 space-y-10">
    <h1 class="text-3xl font-bold">Les associations</h1>
    <Assos />
  </div>
</template>
