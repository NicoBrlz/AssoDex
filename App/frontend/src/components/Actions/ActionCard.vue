<template>
  <div class="card bg-base-100 image-full w-80 min-h-80 max-h-80">
    <figure>
      <img :src="image" alt="Img" class="opacity-60">
    </figure>

    <div class="card-body">
      <h1 class="card-title">{{ titre }}</h1>
      <p class="line-clamp-6" >{{description}}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-neutral" @click="navigate(url)">En savoir plus</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
defineProps({
  asso: String,
  titre: String,
  url: String,
  description:String,
  summary: String,
  image: String
})

function navigate(url) {
  window.open(url, '_blank')
}
</script>