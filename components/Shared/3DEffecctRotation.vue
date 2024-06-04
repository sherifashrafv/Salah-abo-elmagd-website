<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

defineProps<{
  title: string;
}>();

const videoAttrs = {
  loop: "",
  muted: "",
  defaultmuted: "",
  preload: "auto",
  playsinline: "",
  class: "rotation-video",
};

const rotation_pic = ref(null);

onMounted(() => {
  gsap.to(rotation_pic.value, {
    scrollTrigger: {
      trigger: rotation_pic.value,
      start: "top 120%",
      end: "top 30%",
      scrub: true,
      onEnter: () => {
        rotation_pic.value.play();
      },
    },
    rotate: 0,
    y: "0%",
    width: "100%",
    duration: 1,
    ease: "power1.out",
    transformOrigin: "center center",
    onUpdate: () => {
      console.log("Animation in progress");
    },
    onComplete: () => {
      console.log("Animation complete");
    },
  });
});
</script>

<template>
  <div>
    <section class="tw-my-44">
      <h1 class="font_tt_runs _heading">{{ title }}</h1>
      <div class="rotation-container tw-relative tw-flex tw-items-center">
        <div class="trigger_video _action">
          <div class="_play font_tt_runs">play</div>
        </div>
        <img
          ref="rotation_pic"
          class="rotation-video"
          src="@/assets/img/home/Image_2.png"
          alt=""
          style="transform: rotate(-20deg) translateY(50%); width: 50%"
        />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.trigger_video {
  @apply tw-absolute tw-flex tw-flex-col tw-top-0 tw-justify-center tw-items-center tw-w-full tw-h-full tw-left-0;
  ._play {
    @apply tw-uppercase tw-px-3 tw-text-primary tw-text-[20px] tw-italic tw-h-[100px] tw-bg-[#000000]  tw-rounded-full tw-w-[100px] tw-flex tw-items-center tw-justify-center;
    background: rgba($color: #000000, $alpha: 25%);
  }
}
.rotation-container {
  @apply tw-relative tw-justify-center tw-flex tw-h-[782px] tw-mt-20 tw-w-full tw-overflow-hidden;
  .rotation-video {
    @apply tw-w-2/4 tw-items-center tw-translate-x-[50%] tw-flex  tw-absolute  tw-justify-center  tw-opacity-[50%];
  }
}
</style>
