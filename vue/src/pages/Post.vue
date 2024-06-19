<script>
import Jumbotron from "../components/Jumbotron.vue";
import axios from "axios"

const apiUrl = "http://localhost:3000/posts";

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
    this.post = (await axios(`${apiUrl}/${this.id}`)).data;
  }
}
</script>

<template>
  <Jumbotron v-if="post" :title="`${post.title}`" :text="`${post.body}`" :post="post" />
</template>