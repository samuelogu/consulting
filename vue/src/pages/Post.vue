<script>
import Jumbotron from "../components/Jumbotron.vue";
import axios from "axios"

export default {
  name: 'Post',
  data() {
    return {
      id: this.$route.params.id,
      post: null
    }
  },
  components: {Jumbotron},
  async mounted() {
    this.post = (await axios(`https://jsonplaceholder.typicode.com/posts/${this.id}`)).data;
  }
}
</script>

<template>
  <Jumbotron v-if="post" :title="`${post.title}`" :text="`${post.body}`" />
</template>