<template>
  <div class="posts">
    <h1>User Posts</h1>
    <div>
      <label for="userSelect">Select User:</label>
      <select id="userSelect" v-model="selectedUser" @change="fetchPosts">
        <option v-for="user in users" :key="user.id" :value="user.id">
          {{ user.name }}
        </option>
      </select>
    </div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      selectedUser: null,
      posts: []
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
          this.users = data;
        });
    },
    fetchPosts() {
      if (this.selectedUser) {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.selectedUser}`)
          .then(response => response.json())
          .then(data => {
            this.posts = data;
          });
      }
    }
  }
};
</script>

<style>
.posts {
  padding: 20px;
}

.posts h1 {
  margin-bottom: 20px;
}

.posts select {
  margin-bottom: 20px;
}

.posts ul {
  list-style-type: none;
  padding: 0;
}

.posts li {
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
}

.posts h3 {
  margin: 0 0 10px 0;
}

.posts p {
  margin: 0;
}
</style>
