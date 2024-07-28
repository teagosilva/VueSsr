<script setup>
defineProps({
  title: {
    required: true,
    typr: String
  },
  subtitle: {
    required: true,
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
    <p :class="`text-${titleColor}`" class="m-0 mt-1 fs-2">{{ title }}</p>
    <span :class="`text-${subtitleColor}`" class="fs-6">{{ subtitle }}</span>
  </div>
</template>


<style lang="scss" scoped></style>