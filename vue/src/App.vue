<script>
import Nav from './components/Nav.vue'
export default {
  components: {
    Nav
  }
}
</script>

<template>
  <Nav></Nav>
  <div class="container">
    <router-view></router-view>
  </div>
</template>
