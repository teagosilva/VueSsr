<script setup>

defineProps(['product']);

</script>

<template>
  <div class="product border border-success p-2">
    <div class="product_card">
      <p class="product_card__name fs-4">
        <strong>{{ product.name }}</strong>
      </p>
      <p class="product_card__name">
        {{ product.description }}
      </p>
      <p class="product_card__old__price m-0 fw-bold text-tertiary m-0 fs-6">
        <del>R$ {{ product.price }}</del>
      </p>
      <p class="product_card__price m-0 text-secondary fs-4">
        <strong>R$ {{ product.price }}</strong>
      </p>
    </div>
  </div>
</template>


<style lang="scss" scoped>

.product {
    height: 100%;
    border-radius: 12px;
  }
 .product__card {
    height: 100%;
    min-height: initial;
}
.product_card__price {
  flex: 1;
  align-self: flex-end;
}
</style>