<script lang="ts" setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import anime from "animejs/lib/anime.es.js";
import BaseButton from "~/components/Core/BaseButton.vue";
const fadeIn_box = ref(null);
onMounted(() => {
  const textElement = document.querySelector("._about");
  if (textElement) {
    const textContent = textElement.textContent || "";
    const splitedText = textContent.split("");

    textElement.textContent = "";

    splitedText.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      textElement.appendChild(span);
    });

    anime
      .timeline()
      .add({
        targets: "._about span",
        translateY: [200, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        display: ["none", "flex"],
        delay: (el, i) => 700 + 50 * i,
        complete: function (anim) {
          document.querySelectorAll("._about span").forEach(function (span) {
            span.classList.add("tw-text-third");
          });
        },
      })
      .add({
        targets: "._name",
        translateX: [-200, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        display: ["none", "flex"],
        delay: (el, i) => 300 + 50 * i,
      });

    gsap.from(fadeIn_box.value.children, {
      opacity: 0,
      y: 0,
      duration: 0.5,
      delay: 1,
      stagger: {
        amount: 1,
      },
      onComplete: () => {
        anime({
          targets: "._animated_img",
          opacity: [0, 1],
          easing: "easeInOutQuad",
          duration: 1000,
        });
      },
    });
  }
});
</script>

<template>
  <section class="intro-wrapper dark:dark-bg-gradient">
    <div class="main-content-box">
      <div class="dark-bg-gradient tw-absolute tw-w-full tw-h-[141%]"></div>
      <div class="content-box">
        <div class="content-box-text">
          <h5 class="_name">Salah AboelMagd</h5>
          <h1 class="_about">International Trainer</h1>
        </div>
        <div class="_animated_img">
          <img src="~/assets/img/home/_animated.gif" alt="" />
        </div>
        <!-- <img ref="_animated_img" src="~/assets/img/home/_animated.svg" alt="" /> -->
      </div>
      <div class="tw-flex tw-flex-col tw-pb-[7rem]">
        <img
          class="image__wrapper"
          data-animation="image"
          lazy
          src="~/assets/img/home/Salah_Abo_Elmagd.png"
        />
        <div
          ref="fadeIn_box"
          class="-tw-mt-[20rem] tw-ms-[12rem] tw-z-50 tw-space-y-5"
        >
          <p class="tw-text-primary tw-text-[18px] tw-w-[329px] tw-font-medium">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <BaseButton
            hover="#000"
            span="#fff"
            color="#000"
            bgColor="#c79a7b"
            :width="140"
            :height="40"
          >
            <span class="tw-z-50 tw-font-extrabold"> Contact Me</span>
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scopedd>
@import url("/assets/styles/pages/intro.scss");
</style>
