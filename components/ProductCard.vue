<script setup>

defineProps(['product']);

</script>

<template>
  <div class="product border border-success">
    <div class="product_card">
      <p class="product_card__name fs-3">
        <strong>{{ product.name }}</strong>
      </p>
      <span class="product_card__name">
        {{ product.description }}
      </span>
    </div>
  </div>
</template>


<style lang="scss" scoped>

.product {
    height: 100%;
  }
  .product__card {
    height: 100%;
    min-height: initial;
}
</style>