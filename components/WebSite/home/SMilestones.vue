<script lang="ts" setup>
import { ref, onMounted, nextTick, computed } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MilestonesCard from "~/components/Shared/MilestonesCard.vue";
gsap.registerPlugin(ScrollTrigger);
const headingText = "SALAH’S MILESTONES";
const splitHeading = computed(() => {
  return headingText
    .split("")
    .map((char, index) => {
      return `<span class="letter" style="opacity: 0">${char}</span>`;
    })
    .join("");
});

onMounted(async () => {
  await nextTick();

  const letters = document.querySelectorAll(".letter");

  gsap.fromTo(
    letters,
    { opacity: 0.3 },
    {
      opacity: 1,
      duration: 3,
      stagger: 0.5,
      scrollTrigger: {
        trigger: "._milestones_heading",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    }
  );

  gsap.utils.toArray("._milestones-card").forEach((card: any) => {
    gsap.from(card, {
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
        toggleActions: "play none none none",
      },
    });
  });
});
</script>

<template>
  <section class="tw-mt-20">
    <h1
      class="heading _milestones_heading font_tt_runs"
      v-html="splitHeading"
    ></h1>
    <milestones-card v-for="(row, indx) in 4" :key="indx" />
  </section>
</template>

<style>
@import url("@/assets/styles/pages/_milestones.scss");
</style>
