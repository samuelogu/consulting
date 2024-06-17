<script>
export default {
  name: 'Alert',
  props: {
    message: "",
    type: "alert-primary",
  }
}
</script>

<template>
  <div class="alert text-center" :class="[type]">{{ message }}</div>
</template>