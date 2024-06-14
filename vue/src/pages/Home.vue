<script>
import Jumbotron from "../components/Jumbotron.vue";
import Button from "../components/Button.vue";
import axios from "axios"

export default {
  name: 'Home',
  components: {
    Jumbotron, Button
  },
  data() {
    return {
      msg: "Welcome to the Vue.js application!",
      posts: [],
      photos: []
    }
  },
  methods: {
    changeMessage(newMessage) {
      this.msg = newMessage;
    }
  },
  async mounted() {
    this.posts = (await axios('https://jsonplaceholder.typicode.com/posts')).data.slice(0, 10);
    this.photos = (await axios('https://jsonplaceholder.typicode.com/photos')).data.slice(0, 10);
    this.posts.map((_post, key) => {
      this.posts[key].thumbnail = this.photos[key].thumbnailUrl;
    })
  }
}
</script>

<template>

  <Jumbotron title="Home page" text="Welcome to the Vue.js application!" />
<!--  {{ msg }}
  <br>
  <Button text="Click me" type="btn-danger" @click="changeMessage('This is a vue application!')"  />-->
  <div class="row">
    <div v-if="posts.length" v-for="post in posts" class="col-md-6" :key="post.id">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0">{{ post.title }}</h3>
          <div class="mb-1 text-body-secondary">Nov 12</div>
          <p class="card-text mb-auto">{{ post.body }}</p>
          <router-link :to="`/posts/${post.id}`" class="icon-link gap-1 icon-link-hover stretched-link">
            Continue reading
          </router-link>
        </div>
        <div class="col-auto d-none d-lg-block">
          <img :src="post.thumbnail" v-if="post.thumbnail" :alt="post.title"/>
          <img src='https://placehold.co/150' v-else/>
        </div>
      </div>
    </div>
    <div v-else>Loading posts...</div>
  </div>
</template>