<script>
export default {
  name: 'Button',
  props: {
    text: "",
    type: "btn-primary",
  }
}
</script>

<template>
  <button class="btn" :class="[type]">{{ text }}</button>
</template>