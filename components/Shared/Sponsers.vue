<script lang="ts" setup>
import SeponserIcon from "~/components/Icons/SponserIcon.vue";
</script>

<template>
  <div class="sponsors">
    <article class="wrapper" style="position: relative">
      <div class="marquee">
        <div v-for="item in 2" class="marquee__group">
          <div v-for="(slide, index) in 5" :key="index" class="slide-card">
            <div class="tw-flex tw-items-center">
              <n-icon :size="55" :component="SeponserIcon" />
              <h1
                class="tw-text-primary tw-font-bold tw-uppercase tw-text-[3rem] font_tt_runs"
              >
                graphic design
              </h1>
            </div>
          </div>
        </div>
      </div>
    </article>
    <div class="fade"></div>
  </div>
</template>

<style lang="scss">
:root {
  --size: clamp(40rem, 1rem + 40vmin, 30rem);
  --sponsers-gap: calc(var(--size) / 14);
  --sponsers-duration: 60s;
  --sponsers-scroll-start: 0;
  --sponsers-scroll-end: calc(-100% - var(--sponsers-gap));
}
.sponsors {
  @apply tw-py-5 tw-relative tw-my-10;
  .wrapper {
    @apply tw-flex tw-flex-col tw-gap-[var(--sponsers-gap)] tw-m-auto tw-max-w-[100vw];
  }
  .marquee {
    @apply tw-flex tw-overflow-hidden tw-gap-[var(--sponsers-gap)];
    .slide-card {
      @apply tw-grid tw-place-items-center tw-w-[var(--size)]  tw-relative  tw-transition-all;
    }
    .marquee__group {
      @apply tw-flex tw-shrink-0 lg:tw-items-center tw-justify-around tw-min-w-full;
      animation: scroll-x var(--sponsers-duration) linear infinite;
    }
    &:hover {
      .marquee__group {
        @media (min-width: 1024px) {
          animation-play-state: paused;
        }
      }
    }
  }
}
@keyframes scroll-x {
  from {
    transform: translateX(var(--sponsers-scroll-start));
  }
  to {
    transform: translateX(var(--sponsers-scroll-end));
  }
}
</style>
