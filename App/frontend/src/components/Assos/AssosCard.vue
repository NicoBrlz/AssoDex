<template>
  <div class="flex flex-col justify-center items-center space-y-1">
    <figure class="h-32 w-32 flex items-center">
      <img class="object-fill" :src="image" alt="image" >
    </figure>
    <div class="text-xl font-bold">{{title}}</div>
    <div class="italic line-clamp-1">{{description}}</div>

    <button class="btn btn-primary" @click="navigate(site)">Accéder au site de {{title}}</button>
    <button class="btn btn-outline" @click="navigate(donate)">Faire un don</button>
  </div>
</template>

<script setup lang="js">
defineProps({
  title: String,
  asso: String,
  description: String,
  image: String,
  donate: String,
  site: String
})

function navigate(url) {
  window.open(url, '_blank')
}
</script>