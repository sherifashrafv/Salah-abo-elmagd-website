<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const videoAttrs = {
  loop: "",
  autoplay: "",
  muted: "",
  defaultmuted: "",
  preload: "auto",
  playsinline: "",
  class: "rotation-video",
};

const rotation_video = ref(null);

onMounted(() => {
  gsap.to(rotation_video.value, {
    scrollTrigger: {
      trigger: rotation_video.value,
      start: "top 120%",
      end: "top 30%",
      scrub: true,
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
      <h1 class="font_tt_runs _heading">ONE TO ONE CONSULTATION</h1>
      <div class="rotation-container">
        <video
          ref="rotation_video"
          src="@/assets/styles/pages/videos/_test.mp4"
          v-bind="videoAttrs"
          style="transform: rotate(20deg) translateY(120%) translatex(30%)"
        />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import url("@/assets/styles/pages/services/_consultation.scss");

.rotation-container {
  transition: transform 0.3s ease-out, width 0.3s ease-out;
}
</style>
