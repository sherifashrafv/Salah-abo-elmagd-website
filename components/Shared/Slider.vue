<script lang="ts" setup>
import ContentBox from "@/components/Shared/slider/content";
import LogoBox from "@/components/Shared/slider/logoBox";
defineProps<{
  content: booleaan;
  title: {
    defalut: false;
    type: string;
  };
}>();
const swiperOptions = {
  modules: [SwiperAutoplay, SwiperNavigation],
  navigation: {
    nextEl: "#next-slide",
    prevEl: "#prev-slide",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  centerd: true,
  spaceBetween: 30,
  breakPoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
};
const windowSize = ref(0);
const showNavBtns = computed(() => windowSize.value >= 1024);
onMounted(() => {
  if (window) {
    windowSize.value = window.innerWidth;
    window.addEventListener("resize", () => {
      windowSize.value = window.innerWidth;
    });
  }
});
</script>
<template>
  <div class="tw-w-full tw-relative">
    <CoreBaseContainer>
      <!-- _title -->
      <h1
        class="tw-font-TTRunsTrail tw-text-[56px] tw-mt-10 tw-mb-32 tw-font-black tw-text-center tw-text-primary"
      >
        {{ title }}
      </h1>
      <!-- _title -->
      <Swiper
        :autoplay="swiperOptions.autoplay"
        :breakpoints="swiperOptions.breakPoints"
        :modules="swiperOptions.modules"
        :navigation="swiperOptions.navigation"
        :slides-per-view="1"
        :space-between="swiperOptions.spaceBetween"
        :rewind="true"
        :centerd="swiperOptions.centerd"
      >
        <SwiperSlide v-for="(item, index) in 5" :key="index">
          <component :is="content ? ContentBox : LogoBox" />
        </SwiperSlide>
        <div
          class="tw-flex tw-items-center tw-gap-2 tw-justify-center tw-mt-6 tw-py-6 tw-relative"
        >
          <div
            v-show="!showNavBtns"
            id="prev-slide"
            class="tw-cursor-pointer tw-text-accent disabled:tw-opacity-80 tw-p-2 tw-flex tw-items-center tw-justify-center"
          >
            <Icon name="bi:chevron-left" size="20" />
          </div>
          <div
            v-show="!showNavBtns"
            id="next-slide"
            class="tw-cursor-pointer tw-text-accent disabled:tw-opacity-80 tw-p-2 tw-flex tw-items-center tw-justify-center"
          >
            <Icon name="bi:chevron-right" size="20" />
          </div>
        </div>
      </Swiper>
    </CoreBaseContainer>
  </div>
</template>

<style lang="scss" scoped>
.slider_card {
  @apply tw-bg-[var(--primary-bg-card)] tw-px-10 tw-py-10;
}
</style>
