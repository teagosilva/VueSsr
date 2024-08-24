<script setup>

defineProps(['product']);

</script>

<template>
  <div class="product border border-success">
    <div class="product_card">
      <div class="product__picture">
        <img width="300" height="300"
          src="https://fastly.picsum.photos/id/599/300/300.jpg?hmac=nSWHdvA8ntvutXYRkHDZnrSQ6M5a8fIeWfm9Y9OjB5c" alt=""
          class="img-fluid">
      </div>

      <div class="product__info p-2">
        <p class="product_card__name fs-4">
          <strong>{{ product.name }}</strong>
        </p>

        <p class="product_card__description">
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
  </div>
</template>


<style lang="scss" scoped>

.product {
    height: 100%;
    border-radius: 12px;
    overflow: hidden;
}
 .product__card {
    height: 100%;
    min-height: initial;
}
.product__picture {
  width: 100%;
  height: auto;
}
.product_card__description {
  font-size: 14px;
}
.product_card__price {
  flex: 1;
  align-self: flex-end;
}
</style>