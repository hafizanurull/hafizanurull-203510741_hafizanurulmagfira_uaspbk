<template>
  <div class="container">
    <h1>TO-DO LIST PROJECT</h1>
    <!-- Todo List Component -->
    <section>
      <ul>
        <li v-for="(activity, index) in filteredActivities" :key="index" :class="{ done: activity.completed }">
          <div>
            <input type="checkbox" v-model="activity.completed"/>
            <span>{{ activity.text }}</span>
            <button @click="removeActivity(index)">Remove</button>
          </div>
        </li>
      </ul>
      <label>Show only unfinished activities:</label>
      <input type="checkbox" v-model="showUnfinished">
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  data() {
    return {
      newActivity: '',
      activities: [],
      showUnfinished: false
    }
  },
  methods: {
    addActivity() {
      if (this.newActivity.trim() !== '') {
        this.activities.push({ text: this.newActivity, completed: false });
        this.newActivity = '';
      }
    },
    removeActivity(index) {
      this.activities.splice(index, 1);
    }
  },
  computed: {
    filteredActivities() {
      if (this.showUnfinished) {
        return this.activities.filter(activity => !activity.completed);
      } else {
        return this.activities;
      }
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
}

.done {
  text-decoration: line-through;
  color: #999;
}

input[type="checkbox"] {
  margin-right: 10px;
}
</style>
