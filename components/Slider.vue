<script lang="js" setup>
import { onMounted } from 'vue';
const props = defineProps({
  slide: {
    type: String,
    required: true,
    default: false
  },
  sm: {},
  md: {},
  lg: {},
  xl: {}
});

onMounted(() => {
  $(`.${props.slide}`).slick({
    dots: true,
    arrows: true,
    infinite: false,
    adaptiveHeight: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    mofileFirst: true,
 
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows:false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          indicators: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
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
  <section :class="`${props.slide}`">
    <slot></slot>
  </section>
</template>

<style lang="scss">
.slick-track {
  display: flex;
}
.slick-slide {
  display: flex !important;
}
.img {
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
