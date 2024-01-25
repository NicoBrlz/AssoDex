<script setup>
import ActionList from "@/components/Actions/ActionList.vue";
import MainComponent from "@/components/MainComponent.vue";
import Actions from "@/components/Actions/Actions.vue";
import AutoComplete from "primevue/autocomplete";



</script>

<template>
<!--  <ActionList />-->
  <MainComponent/>
  <div class="h-screen w-screen flex items-center justify-center flex-col">
    <h1 class="text-3xl font-bold">Les actions</h1>
    <Actions/>
  </div>

</template>
