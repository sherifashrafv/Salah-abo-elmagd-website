<script lang="ts" setup>
import { ref, onMounted } from "vue";
import FCard_Icon from "~/components/Ui/FCard_Icon.vue";
import TCard_Icon from "~/components/Ui/ThirdCardIcon.vue";
import FourthCard_Icon from "~/components/Ui/FourthCardIcon.vue";
import SCard_Icon from "~/components/Ui/SecoundIconCard.vue";
import FifithIconCard from "~/components/Ui/FifithIconCard.vue";
import SixCardIcon from "~/components/Ui/SixCardIcon.vue";
import CArrow from "~/components/Ui/CArrow.vue";
import gsap from "gsap";

const el = ref<HTMLElement | null>(null);
const isVisible = ref(false);
const animationPlayed = ref(false);

const Cards = ref([
  {
    icon: FCard_Icon,
    title: "COACHING",
    description: "Lorem Ipsum is simply dummy text of the printing",
    path: "/",
    class: "tw-bg-primaryBg",
  },
  {
    icon: SCard_Icon,
    title: "COACHING",
    description: "Lorem Ipsum is simply dummy text of the printing",
    path: "/",
    class: "tw-bg-secondaryBg",
  },
  {
    icon: TCard_Icon,
    title: "COACHING",
    description: "Lorem Ipsum is simply dummy text of the printing",
    path: "/",
    class: "tw-bg-thirdBg",
  },
  {
    icon: FourthCard_Icon,
    title: "COACHING",
    description: "Lorem Ipsum is simply dummy text of the printing",
    path: "/",
    class: "tw-bg-secondaryBg",
  },
  {
    icon: FifithIconCard,
    title: "COACHING",
    description: "Lorem Ipsum is simply dummy text of the printing",
    path: "/",
    class: "tw-bg-thirdBg",
  },
  {
    icon: SixCardIcon,
    title: "COACHING",
    description: "Lorem Ipsum is simply dummy text of the printing",
    path: "/",
    class: "tw-bg-primaryBg",
  },
]);

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
    gsap.utils.toArray(".rotation").forEach((rotate) => {
      gsap.fromTo(
        rotate,
        {
          rotation: 380,
        },
        {
          rotation: 0,
          duration: 0.5,
          delay: 0.5,
          scrollTrigger: {
            trigger: rotate,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
    gsap.utils.toArray(".divider").forEach((line) => {
      gsap.fromTo(
        line,
        {
          opacity: 0,
          width: "0%",
        },
        {
          opacity: 1,
          width: "50%",
          duration: 0.5,
          delay: 0.5,
          scrollTrigger: {
            trigger: line,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
    // gsap.utils.toArray(".company_card").forEach((card) => {
    //   gsap.from(card, {
    //     opacity: 0,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: card,
    //       start: "top 80%",
    //       end: "bottom 60%",
    //       scrub: true,
    //       toggleActions: "play none none reverse",
    //     },
    //   });
    // });
    animationPlayed.value = true;
  }
};

onMounted(() => {
  el.value = document.getElementById("target-element");
  window.addEventListener("scroll", handleScroll);
});
</script>

<template>
  <div
    id="target-element"
    v-for="(card, indx) in Cards"
    :key="indx"
    :class="`${card.class} company_card tw-py-20  tw-px-10  tw-z-50 `"
  >
    <component :is="card.icon" class="rotation" />
    <h2 class="tw-text-primary tw-mt-7 font_tt_runs tw-font-black tw-my-3 tw-">
      {{ card.title }}
    </h2>
    <p class="tw-text-[18px] tw-pe-[12rem] tw-text-primary">
      {{ card.description }}
    </p>
    <div class="tw-flex tw-flex-col">
      <div class="divider"></div>
      <NuxtLink :to="card.path" custom v-slot="{ navigate }">
        <div
          class="tw-flex tw-gap-5 details-box tw-w-fit tw-cursor-pointer tw-items-center tw-mt-7"
        >
          <h3
            @click="navigate()"
            class="tw-text-primary font_tt_runs tw-text-[12px] tw-font-black tw-uppercase"
          >
            VIEW DETAILS
          </h3>
          <n-icon :component="CArrow" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("@/assets/styles/pages/cards.scss");
</style>
