<script lang="ts" setup>
import { ref, onMounted, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BaseButton from "~/components/Core/BaseButton.vue";
gsap.registerPlugin(ScrollTrigger);

const el = ref<HTMLElement | null>(null);

const isScrolledIntoView = (el: HTMLElement | null, offset: number = 450) => {
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;
  return elemTop < window.innerHeight - offset && elemBottom >= offset;
};

const handleScroll = () => {
  if (isScrolledIntoView(el.value)) {
  }
};

onMounted(async () => {
  await nextTick();
  const spacer = 20;
  const minScale = 0.8;
  const distributor = gsap.utils.distribute({ base: minScale, amount: 0.2 });
  window.addEventListener("scroll", handleScroll);

  const cards = gsap.utils.toArray<HTMLElement>(".shuffle-card");

  cards.forEach((card, index) => {
    const scaleVal = distributor(index, cards[index], cards);

    const tween = gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: `top top`,
        end: () => `top top+=40`,
        scrub: true,
        markers: false,
        invalidateOnRefresh: true,
      },
      ease: "none",
      // scale: scaleVal,
    });

    ScrollTrigger.create({
      trigger: card,
      start: () => `top-=${index * spacer + index * 50} top`, // Adjusting the top value dynamically
      pin: true,
      pinSpacing: false,
      markers: false,
      id: "pin",
      end: () => `bottom top+=${280 + cards.length * spacer + index * 10}`, // Adjusting the end value dynamically
      invalidateOnRefresh: true,
      endTrigger: ".cards",
    });
  });

  gsap.fromTo(
    ".milestones-card",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".milestones-card",
        start: "top 80%",
        toggleActions: "play none none none",
        markers: false, // Disable markers
      },
    }
  );
  gsap.fromTo(
    ".our_roesources",
    { opacity: 0.3 },
    {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".our_roesources",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    }
  );
  const lastCard = cards[cards.length - 1];
  gsap.fromTo(
    ".rotate_svg",
    { rotation: 0 },
    {
      rotation: 135,
      scrollTrigger: {
        trigger: lastCard,
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: false,
        toggleActions: "play reverse play reverse",
      },
    }
  );
});
</script>

<template>
  <section class="tw-mt-80">
    <h1 class="tw-mt-20 heading tw-text-primary our_roesources font_tt_runs">
      CHECK OUT OUR Resources
    </h1>
    <div class="container tw-mt-20">
      <div class="cards">
        <div class="shuffle-card tw-bg-[#242424]" style="top: 40px">
          <div class="tw-z-50">
            <h1
              class="tw-text-primary tw-text-[40px] font_tt_runs tw-font-black"
            >
              Leadership Skills
            </h1>
            <ul class="tw-text-primary tw-mx-8 tw-mt-5">
              <li class="tw-text-[20px] tw-mb-5 tw-pe-24">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </li>
              <li class="tw-text-[20px] tw-mb-5">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </li>
            </ul>
            <BaseButton
              hover="#000"
              span="#fff"
              color="#000"
              bgColor="#c79a7b"
              :width="140"
            >
              <span class="tw-z-50 tw-font-extrabold"> MORE DETAILS </span>
            </BaseButton>
          </div>
          <div class="!tw-h-full !tw-w-full tw-relative">
            <img
              class="tw-h-full !tw-w-full tw-object-cover"
              src="~/assets/img/home/pic_2.png"
              alt=""
            />
          </div>
          <div class="overlay _1"></div>
        </div>
        <div class="shuffle-card tw-bg-[#c79a7b]" style="top: 45px">
          <div class="tw-z-50">
            <h1
              class="tw-text-[#242424] tw-pe-[19rem] tw-text-[40px] font_tt_runs tw-font-black"
            >
              Mastering Communications in Workplace
            </h1>
            <ul class="tw-text-[#242424] tw-mx-8 tw-mt-5">
              <li class="tw-text-[20px] tw-mb-5">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </li>
              <li class="tw-text-[20px] tw-mb-5">
                identify the massive role leadership in building effective
                organzations
              </li>
            </ul>
            <BaseButton
              hover="#fff"
              span="#000"
              color="#fff"
              bgColor="#000"
              :width="140"
            >
              <span class="tw-z-50 tw-font-extrabold"> More Contact </span>
            </BaseButton>
          </div>
          <div class="!tw-h-full !tw-w-full">
            <img
              class="tw-h-full !tw-w-full tw-object-cover"
              src="~/assets/img/home/salah_img_card_2.png"
              alt=""
            />
          </div>
          <div class="overlay _2"></div>
        </div>
        <div class="shuffle-card tw-bg-[#dfd2c0]" style="top: 45px">
          <div class="tw-z-50">
            <h1
              class="tw-text-[#242424] tw-pe-[19rem] tw-text-[40px] font_tt_runs tw-font-black"
            >
              Mastering Communications in Workplace
            </h1>
            <ul class="tw-text-[#242424] tw-mx-8 tw-mt-5">
              <li class="tw-text-[20px] tw-mb-5">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </li>
              <li class="tw-text-[20px] tw-mb-5">
                identify the massive role leadership in building effective
                organzations
              </li>
            </ul>
            <BaseButton
              hover="#fff"
              span="#000"
              color="#fff"
              bgColor="#000"
              :width="140"
            >
              <span class="tw-z-50 tw-font-extrabold"> More Contact </span>
            </BaseButton>
          </div>
          <div class="!tw-h-full !tw-w-full">
            <img
              class="tw-h-full !tw-w-full tw-object-cover"
              src="~/assets/img/home/salah_img_card_3.png"
              alt=""
            />
          </div>
          <div class="overlay _3"></div>
        </div>
        <div
          class="shuffle-card !tw-flex !tw-justify-center !tw-items-center tw-bg-[#dfd2c0]"
          style="top: 45px"
        >
          <div
            class="tw-z-50 tw-m-auto tw-flex tw-flex-col tw-justify-center tw-items-center"
          >
            <h1
              class="tw-text-[#242424] tw-text-[40px] font_tt_runs tw-font-black"
            >
              GET IT NOW
            </h1>
            <div
              class="rotate_svg tw-mt-10 tw-bg-black tw-rounded-full tw-h-[50px] tw-w-[50px] tw-flex tw-items-center tw-justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M33.8751 2V26.375C33.8751 26.8723 33.6775 27.3492 33.3259 27.7008C32.9743 28.0525 32.4973 28.25 32.0001 28.25C31.5028 28.25 31.0259 28.0525 30.6742 27.7008C30.3226 27.3492 30.1251 26.8723 30.1251 26.375V6.52578L3.32663 33.3266C2.9748 33.6784 2.49762 33.876 2.00007 33.876C1.50251 33.876 1.02533 33.6784 0.673503 33.3266C0.321677 32.9747 0.124023 32.4976 0.124023 32C0.124023 31.5024 0.321677 31.0253 0.673503 30.6734L27.4743 3.875H7.62507C7.12779 3.875 6.65087 3.67746 6.29924 3.32582C5.94761 2.97419 5.75007 2.49728 5.75007 2C5.75007 1.50272 5.94761 1.02581 6.29924 0.674175C6.65087 0.322544 7.12779 0.125 7.62507 0.125H32.0001C32.4973 0.125 32.9743 0.322544 33.3259 0.674175C33.6775 1.02581 33.8751 1.50272 33.8751 2Z"
                  fill="#DFD2C0"
                />
              </svg>
            </div>
          </div>
          <div class="overlay _3"></div>
        </div>
      </div>
    </div>
    <div class="container2"></div>
  </section>
</template>

<style lang="scss" scoped>
@import url("@/assets/styles/pages/_ourResources.scss");
#pin {
  display: none !important;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &._1 {
    background: linear-gradient(180deg, rgba(27, 27, 27, 0) 0%, #1b1b1b 100.5%);
  }
  &._2 {
    background: linear-gradient(180deg, rgba(27, 27, 27, 0) 0%, #bf9476 100.5%);
  }
  &._3 {
    background: linear-gradient(180deg, rgba(27, 27, 27, 0) 0%, #dfd2c0 100.5%);
  }
}
</style>
