<script setup>

defineProps(['product']);

</script>

<template>
  <div class="product">
    <div class="product_card bg-primary">
      <p class="product_card__name fs-3">
        <strong>{{ product.name }}</strong>
      </p>
      <p class="product_card__name">
        {{ product.description }}
      </p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.product {
    height: 100%;
    min-height: initial;
}
.product__card {
  height: 100%;
}
</style>