<script lang="ts" setup>
import gifImage from "@/assets/img/gif/services.gif";
import { onMounted, ref } from "vue";
import gsap from "gsap";

const heading = ref(null);

onMounted(() => {
  const headingElement = heading.value;
  if (headingElement) {
    const text = headingElement.textContent || "";
    headingElement.textContent = "";
    text.split("").forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.classList.add("letter");
      headingElement.appendChild(span);
    });

    const letters = headingElement.querySelectorAll(".letter");

    gsap.fromTo(
      letters,
      {
        y: -250,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
      }
    );
  }
});
</script>

<template>
  <section class="tw-py-24">
    <div
      :style="{ backgroundImage: `url(${gifImage})` }"
      class="_services_section"
    >
      <h1 ref="heading" class="_heading stagger_element font_tt_runs">
        Salah Abo Elmaged Services
      </h1>
    </div>
  </section>
</template>

<style lang="scss">
@import url("@/assets/styles/pages/services/_services.scss");
</style>
