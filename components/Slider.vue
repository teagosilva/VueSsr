<script lang="js" setup>
import { onMounted } from 'vue';
onMounted(() => {
  $(".slide").slick({ dots: true, insicators: true});
})
</script>

<template>
  <div>
    <section class="slide">
      <img src="https://fastly.picsum.photos/id/82/1700/730.jpg?hmac=xtw3Oiin_Lf7NItH3Fj8xySTMVws0EhqvIHvgdSfJYQ"
        class="img-fluid mx-auto" alt=""></img>
      <img src="https://fastly.picsum.photos/id/82/1700/730.jpg?hmac=xtw3Oiin_Lf7NItH3Fj8xySTMVws0EhqvIHvgdSfJYQ"
        class="img-fluid mx-auto" alt=""></img>
      <img src="https://fastly.picsum.photos/id/82/1700/730.jpg?hmac=xtw3Oiin_Lf7NItH3Fj8xySTMVws0EhqvIHvgdSfJYQ"
        class="img-fluid mx-auto" alt=""></img>
    </section>
  </div>
</template>


<style lang="scss">
img {
  width: 100%;
  max-height: 500px;
}

.slick-next {
  right: 40px;
}

.slick-prev {
  left: 40px;
  z-index: 1;
}
</style>