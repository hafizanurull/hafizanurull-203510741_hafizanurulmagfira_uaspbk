<template>
    <div class="albums">
      <h1>Albums</h1>
      <ul>
        <li v-for="album in albums" :key="album.id">
          <router-link :to="'/albums/' + album.id">{{ album.title }}</router-link>
        </li>
      </ul>
      <router-view/>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useStore } from 'pinia'
  
  export default {
    name: 'AlbumsView',
    setup() {
      const store = useStore()
  
      // Inisialisasi albums sebagai ref array kosong
      const albums = ref([])
  
      // Ambil data album dari API menggunakan fetch
      fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => {
          albums.value = data
        })
        .catch(error => {
          console.error('Error fetching albums:', error)
        })
  
      return {
        albums
      }
    }
  }
  </script>
  