<script lang="ts" setup>
import CNavbarController from "~/components/WebSite/CNavbarController.vue";
import gsap from "gsap";
import { ref, onMounted } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scrollPosition = ref(0);
const header_links = ref(null);

onMounted(() => {
  window.addEventListener("scroll", () => {
    scrollPosition.value = window.scrollY;
  });
  gsap.from(header_links.value.children, {
    opacity: 0,
    x: 0,
    duration: 0.3,
    delay: 0.3,
    stagger: {
      amount: 0.3,
    },
  });
  // gsap.from(".animate-icon", {
  //   opacity: 0,
  //   y: 250,
  //   duration: 1,
  //   delay: 0.5,
  // });
  // gsap.from(".scroll-animate", {
  //   opacity: 0,
  //   duration: 1,
  //   delay: 0.5,
  // });
});
</script>

<template>
  <div>
    <NuxtLoadingIndicator :duration="6000000" :height="3" />
    <header
      :class="{ '--scroll': scrollPosition > 10 }"
      class="header tw-top-0 tw-relative"
    >
      <div class="header-bg">
        <CoreBaseContainer>
          <div class="tw-flex tw-justify-between tw-items-center">
            <NuxtLink
              class="tw-flex tw-flex-col tw-gap-4 tw-overflow-hidden"
              to="/"
            >
              <img
                class="tw-w-full tw-h-[30px] tw-object-contain"
                src="~/assets/svg/_salah.svg"
              />
              <img
                class="tw-h-full tw-w-full tw-object-cover"
                src="~/assets/svg/abo_elmgd.svg"
                alt=""
              />
            </NuxtLink>
            <!-- START:header_links -->
            <div
              ref="header_links"
              class="header_links tw-flex tw-gap-20 tw-items-center"
            >
              <NuxtLink to="/">Home</NuxtLink>
              <NuxtLink to="/services">Services</NuxtLink>
              <NuxtLink to="/learn">Learn</NuxtLink>
              <NuxtLink to="/about">About</NuxtLink>
              <NuxtLink to="/contact">Contact</NuxtLink>
              <NuxtLink to="/checkout">Checkout</NuxtLink>
            </div>
            <!-- END:header_links -->

            <!-- START:controllers -->
            <c-navbar-controller />
            <!-- END:controllers -->
          </div>
        </CoreBaseContainer>
      </div>
    </header>
  </div>
</template>

<style scoped lang="scss">
@import url("/assets/styles/pages/navbar.scss");
</style>
