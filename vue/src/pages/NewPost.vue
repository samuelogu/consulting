<script>
import Alert from "../components/Alert.vue";
import axios from "axios"

const apiUrl = "http://localhost:3000";

export default {
  name: 'NewPost',
  components: {
    Alert
  },
  methods: {
    displayAlert(message, type) {
      this.error.message = message;
      this.error.type = type;
    },
    async addPost(e) {
      e.preventDefault();
      const title = this.post.title;
      const body = this.post.body;

      this.error.message = "";

      if (!title || !body) {
        this.displayAlert("All fields are required!", "alert-danger");
        return false;
      }

      try {
        const res = await axios.post(`${apiUrl}/posts`, {
          title, body
        })

        this.displayAlert(res.data.message, "alert-success");
        this.post.title = '';
        this.post.body = '';

      } catch (e) {
        this.displayAlert(e.response.data, "alert-danger");
      }

    }
  },
  data() {
    return {
      post: {
        title: "",
        body: ""
      },
      error: {
        message: "",
        type: ""
      }
    }
  }
}
</script>

<template>
  <main class="form-signin w-100 m-auto">
    <form>
      <img class="mb-4" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
      <h1 class="h3 mb-3 fw-normal">New Post</h1>
        <Alert v-if="error.message" :message="error.message" :type="error.type" />
      <div class="form-floating">
        <input type="email" v-model="post.title" class="form-control" id="floatingInput" placeholder="Post title">
        <label for="floatingInput">Title</label>
      </div>
      <div class="form-floating">
        <textarea name="" v-model="post.body" class="form-control" id="floatingBody" rows="3" placeholder="Post body"></textarea>
        <label for="floatingBody">Body</label>
      </div>

      <button class="btn btn-primary w-100 py-2 mt-4" @click="addPost" type="submit">Add Post</button>
    </form>
  </main>
</template>

<style scoped>
.form-signin {
  max-width: 330px;
  padding: 50px 1rem 1rem;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>