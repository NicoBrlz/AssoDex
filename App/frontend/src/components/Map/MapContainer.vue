<template>
  <div class="m-10">
    <h1 class="text-2xl font-bold self-center">Emplacement des associations</h1>
    <div id="map" class="h-96 rounded-lg"></div>
  </div>

</template>

<script setup lang="js">
import L from 'leaflet'
import {onMounted, ref} from "vue";
import axios from "axios";

let assoData = ref([])
let markerData = ref([])
let isMapLoaded = ref(false);

function initMap() {
  const map = L.map('map').setView([48.85645700457591, 2.3466741574109835], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);



  for (let data of markerData.value) {
    let marker = L.marker(data.location, {title: data.asso})
        .addTo(map)
        .bindPopup(`${data.asso}: ${data.base_address}`)
  }

}

onMounted(async () => {

  await getAssosAdress();
  await getCoordonates();
  initMap();

})

async function getAssosAdress() {
  const raw = await axios.get('http://localhost:3000/assos');
  const assos = await raw.data;

  for (let asso of assos) {

    let data = {}

    data['nom'] = asso.nom;
    data['location'] = JSON.parse(asso.adresses_processed);
    data['base_address'] = JSON.parse(asso.adresses_processed);
    data['location'] = data['location'].map(el => makeAdress(el))
    assoData.value.push(data)
  }
}

function makeAdress(address) {
  return address.replace(/ /g, '+')
}


async function getCoordonates() {
  const gouvUrl = 'https://api-adresse.data.gouv.fr/search/?q=';
  let result = [];
  for (let asso of assoData.value) {
    for (let location of asso.location) {

      const rawLoc = await axios.get(gouvUrl + location);
      const loc = await rawLoc.data;
      const geoloc = await loc.features[0].geometry.coordinates;

      let data = {
        asso: asso.nom,
        location: geoloc.reverse(),
        base_address: location.replace(/\+/g, ' ')
      }
      result.push(data)
    }
  }

  markerData.value = result;

}


</script>