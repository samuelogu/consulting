<script>
import Button from "./Button.vue";
import axios from "axios"

const apiUrl = "http://localhost:3000/posts";

export default {
  name: 'Jumbotron',
  components: { Button },
  props: {
    title: "",
    text: "",
    post: ""
  },
  methods: {
    async removePost() {
      const { id } = this.post;

      try {

        const res = await axios.delete(`${apiUrl}/${id}`)
        await this.$router.push("/");
        alert(res.data.message)

      } catch (e) {
        alert(e.response.data)
      }
    }
  }
}
</script>

<template>
  <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
    <div class="col-lg-6 px-0">
      <h1 class="display-4 fst-italic">{{ title }}</h1>
      <p class="lead my-3">{{ text }}</p>
      <Button v-if="post" class="mb-2" text="Remove" type="btn-danger" @click="removePost" />
      <p class="lead mb-0">
        <router-link to="/posts/add" class="text-body-emphasis fw-bold">Add new post</router-link>
      </p>
    </div>
  </div>
</template>