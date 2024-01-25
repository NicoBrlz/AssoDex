<template>
  <div class="navbar bg-primary">
    <div class="flex-1 text-white">
      <router-link :to="{name: 'assos'}" class="btn btn-ghost text-2xl">
        <img src="../assets/Logo_AssoDex2.png" class="h-8 w-8">
        Assodex
      </router-link>
    </div>
    <div class="flex-none text-white">
      <ul class="menu menu-horizontal px-1 ">
        <li><router-link :to="{name: 'assos'}" class="font-bold">Associations</router-link></li>
        <li><router-link :to="{name: 'actions'}" class="font-bold">Actions</router-link></li>
        <li><router-link :to="{name: 'carte'}" class="font-bold">Carte</router-link></li>
      </ul>
    </div>
  </div>
</template>



<script setup lang="js">


</script>