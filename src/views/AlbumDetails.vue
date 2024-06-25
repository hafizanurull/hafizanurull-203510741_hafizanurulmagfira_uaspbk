<template>
  <div class="album-detail">
    <h2>{{ album.title }}</h2>
    <p><strong>User ID:</strong> {{ album.userId }}</p>
    <p><strong>ID:</strong> {{ album.id }}</p>
    <p><strong>Number of Photos:</strong> {{ photos.length }}</p>
    <h3>Photos:</h3>
    <ul>
      <li v-for="photo in photos" :key="photo.id">
        <img :src="photo.thumbnailUrl" :alt="photo.title">
        <p>{{ photo.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'AlbumDetailView',
  setup() {
    const route = useRoute()
    const albumId = ref(route.params.id_album)
    const album = ref(null)
    const photos = ref([])

    // Fetch album details
    onMounted(() => {
      fetch(`https://jsonplaceholder.typicode.com/albums/${albumId.value}`)
        .then(response => response.json())
        .then(data => {
          album.value = data
        })
        .catch(error => {
          console.error('Error fetching album details:', error)
        })
    })

    // Fetch photos related to the album
    onMounted(() => {
      fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId.value}`)
        .then(response => response.json())
        .then(data => {
          photos.value = data
        })
        .catch(error => {
          console.error('Error fetching photos:', error)
        })
    })

    return {
      album,
      photos
    }
  }
}
</script>

<style scoped>
.album-detail {
  padding: 20px;
}

.album-detail h2 {
  margin-bottom: 10px;
}

.album-detail p {
  margin-bottom: 5px;
}

.album-detail ul {
  list-style-type: none;
  padding: 0;
}

.album-detail li {
  margin-bottom: 20px;
}

.album-detail img {
  max-width: 100%;
  border: 1px solid #ccc;
  padding: 3px;
}
</style>
