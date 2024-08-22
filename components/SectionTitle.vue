<script setup>
defineProps({
  title: {
    required: true,
    typr: String
  },
  subtitle: {
    required: false,
    typr: String
  },
  titleColor: {
    required: false,
    typr: String,
    default: 'primary'
  },
  subtitleColor: {
    required: false,
    typr: String,
    default: 'primary'
  }
})
</script>


<template>
  <div>
    <p :class="`text-${titleColor}`" class="m-0 mt-4 fs-2">{{ title }}</p>
    <p :class="`text-${subtitleColor}`" class="fs-6 mb-4 ms-3 subtititle">{{ subtitle }}</p>
  </div>
</template>


<style lang="scss" scoped>
</style>