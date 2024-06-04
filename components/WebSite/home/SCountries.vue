<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const el = ref<HTMLElement | null>(null);
const isScrolledIntoView = (el: HTMLElement | null) => {
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;
  isVisible.value = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible.value;
};
const handleScroll = () => {
  if (isScrolledIntoView(el.value) && !animationPlayed.value) {
    gsap.utils.toArray(".country_card").forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      });
    });
    animationPlayed.value = true;
  }
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  gsap.fromTo(
    ".countries-title",
    { opacity: 0.5 },
    {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".countries-title",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    }
  );
});
</script>
<template>
  <section class="_world_map">
    <div class="_overlay"></div>
    <div class="tw-z-50 tw-relative">
      <h1
        class="countries-title tw-mt-20 tw-text-[56px] tw-uppercase tw-text-center tw-font-black tw-text-primary font_tt_runs"
      >
        Countries
      </h1>
      <div class="cards-container tw-w-6/12 !tw-mt-10 tw-flex tw-gap-24">
        <div class="country_card">
          <img
            src="@/assets/svg/test_flag.svg"
            class="tw-w-full tw-h-full tw-object-cover"
          />
          <div class="tw-flex tw-flex-col tw-w-full tw-gap-1">
            <h4
              class="!tw-text-primary tw-text-[18px] font_tt_runs tw-font-bold"
            >
              Country Name
            </h4>
            <h4 class="tw-text-fifith tw-text-[20px]">22 Jun 2022</h4>
          </div>
        </div>
        <div class="country_card">
          <img
            src="@/assets/svg/test_flag.svg"
            class="tw-w-full tw-h-full tw-object-cover"
          />
          <div class="tw-flex tw-flex-col tw-w-full tw-gap-1">
            <h4
              class="!tw-text-primary tw-text-[18px] font_tt_runs tw-font-bold"
            >
              Country Name
            </h4>
            <h4 class="tw-text-fifith tw-text-[20px]">22 Jun 2022</h4>
          </div>
        </div>
      </div>
      <div class="cards-container _3 !tw-mt-10 tw-flex tw-gap-48 !tw-mx-20">
        <div class="country_card">
          <img
            src="@/assets/svg/test_flag.svg"
            class="tw-w-full tw-h-full tw-object-cover"
          />
          <div class="tw-flex tw-flex-col tw-w-full tw-gap-1">
            <h4
              class="!tw-text-primary tw-text-[18px] font_tt_runs tw-font-bold"
            >
              Country Name
            </h4>
            <h4 class="tw-text-fifith tw-text-[20px]">22 Jun 2022</h4>
          </div>
        </div>
        <div class="country_card">
          <img
            src="@/assets/svg/test_flag.svg"
            class="tw-w-full tw-h-full tw-object-cover"
          />
          <div class="tw-flex tw-flex-col tw-w-full tw-gap-1">
            <h4
              class="!tw-text-primary tw-text-[18px] font_tt_runs tw-font-bold"
            >
              Country Name
            </h4>
            <h4 class="tw-text-fifith tw-text-[20px]">22 Jun 2022</h4>
          </div>
        </div>
        <div class="country_card">
          <img
            src="@/assets/svg/test_flag.svg"
            class="tw-w-full tw-h-full tw-object-cover"
          />
          <div class="tw-flex tw-flex-col tw-w-full tw-gap-1">
            <h4
              class="!tw-text-primary tw-text-[18px] font_tt_runs tw-font-bold"
            >
              Country Name
            </h4>
            <h4 class="tw-text-fifith tw-text-[20px]">22 Jun 2022</h4>
          </div>
        </div>
      </div>
      <div class="cards-container tw-w-6/12 !tw-mt-10 tw-flex tw-gap-24">
        <div class="country_card">
          <img
            src="@/assets/svg/test_flag.svg"
            class="tw-w-full tw-h-full tw-object-cover"
          />
          <div class="tw-flex tw-flex-col tw-w-full tw-gap-1">
            <h4
              class="!tw-text-primary tw-text-[18px] font_tt_runs tw-font-bold"
            >
              Country Name
            </h4>
            <h4 class="tw-text-fifith tw-text-[20px]">22 Jun 2022</h4>
          </div>
        </div>
        <div class="country_card">
          <img
            src="@/assets/svg/test_flag.svg"
            class="tw-w-full tw-h-full tw-object-cover"
          />
          <div class="tw-flex tw-flex-col tw-w-full tw-gap-1">
            <h4
              class="!tw-text-primary tw-text-[18px] font_tt_runs tw-font-bold"
            >
              Country Name
            </h4>
            <h4 class="tw-text-fifith tw-text-[20px]">22 Jun 2022</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
._world_map {
  @apply tw-py-10 tw-h-[1000px] tw-relative;
  background: url("@/assets/img/home/map.png") center center no-repeat;
}
.cards-container {
  @apply tw-justify-center tw-m-auto tw-p-10 tw-items-center;
  .country_card {
    @apply tw-flex tw-relative tw-py-7 tw-gap-3 tw-px-5 tw-w-full tw-items-start;
    backdrop-filter: blur(2px);
    background: rgba(223, 210, 192, 0.15);
    border-radius: var(--base-raduis);
    img {
      @apply tw-w-[35px] tw-h-full tw-object-cover;
    }
  }
  ._3 {
    width: calc(100% / 3);
  }
}
</style>
