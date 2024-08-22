<script lang="js" setup>
import { onMounted } from 'vue';
const props = defineProps({
  slide: {
    type: String,
    required: true,
    default: false
  }
});

onMounted(() => {
  $(`.${props.slide}`).slick({
    dots: true,
    arrows: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    mofileFirst: true,
 
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows:false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          indicators: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
})
</script>

<template>
  <div>
    <section :class="`${props.slide}`">
      <slot></slot>
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

.container {
  .slick-next {
      right: -40px;
    }
  
    .slick-prev {
      left: -40px;
      z-index: 1;
    }
}
</style>
