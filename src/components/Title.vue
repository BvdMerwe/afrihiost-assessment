<template>
  <div class="title">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: "Title"
}
</script>

<style lang="scss" scoped>
@import '../assets/css/variables.scss';

.title {
    font-weight: 300;
    font-size: 32px;
    background: $orange-gradient;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>