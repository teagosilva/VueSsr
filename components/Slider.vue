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
  xl: {},
  xxl: {}
});

onMounted(() => {
  $(`.${props.slide}`).slick({
    mobileFirst: true,
    dots: props?.sm?.dots ?? true,
    arrows: props?.sm?.arrows ?? false,
    infinite: props?.sm?.infinite ?? false,
    adaptiveHeight: props?.sm?.adaptiveHeight ?? false,
    slidesToShow: props?.sm?.slidesToShow ?? 1,
    slidesToScroll: props?.sm?.slidesToScroll ?? 1,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: props?.sm?.dots ?? true,
          arrows: props?.sm?.arrows ?? false,
          infinite: props?.sm?.infinite ?? false,
          adaptiveHeight: props?.sm?.adaptiveHeight ?? false,
          slidesToShow: props?.sm?.slidesToShow ?? 2,
          slidesToScroll: props?.sm?.slidesToScroll ?? 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: props?.md?.dots ?? true,
          arrows: props?.md?.arrows ?? false,
          infinite: props?.md?.infinite ?? false,
          adaptiveHeight: props?.md?.adaptiveHeight ?? false,
          slidesToShow: props?.md?.slidesToShow ?? 3,
          slidesToScroll: props?.md?.slidesToScroll ?? 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          dots: props?.lg?.dots ?? true,
          arrows: props?.lg?.arrows ?? false,
          infinite: props?.lg?.infinite ?? false,
          adaptiveHeight: props?.lg?.adaptiveHeight ?? false,
          slidesToShow: props?.lg?.slidesToShow ?? 4,
          slidesToScroll: props?.lg?.slidesToScroll ?? 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          dots: props?.xl?.dots ?? true,
          arrows: props?.xl?.arrows ?? true,
          infinite: props?.xl?.infinite ?? false,
          adaptiveHeight: props?.xl?.adaptiveHeight ?? false,
          slidesToShow: props?.xl?.slidesToShow ?? 5,
          slidesToScroll: props?.xl?.slidesToScroll ?? 1,
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
