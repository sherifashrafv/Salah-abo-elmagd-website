<script lang="ts" setup>
import testImage from "~/assets/img/home/_test_image_one.jpg";
import FirstPartnerIcon from "~/assets/svg/partner_2.svg";
import { ref, onMounted, nextTick } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CArrow from "~/components/Ui/CArrow.vue";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
onMounted(async () => {
  await nextTick();
  gsap.fromTo(
    ".our_clients",
    { opacity: 0.3 },
    {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".our_clients",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    }
  );
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
      },
    }
  );
});
const attributes = ref({
  autoplay: false,
  effect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: "#next-slide",
    prevEl: "#prev-slide",
  },
});
</script>
<template>
  <section class="tw-mt-32">
    <h1 class="tw-mt-20 heading tw-text-primary our_clients font_tt_runs">
      Our Clients
    </h1>
    <Swiper
      class="tw-my-24"
      :slidesPerView="4"
      :spaceBetween="10"
      :centeredSlides:="true"
      :modules="[SwiperNavigation, SwiperFreeMode, SwiperPagination]"
      :navigation="attributes.navigation"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        '340': {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        '640': {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        '768': {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        '1200': {
          slidesPerView: 3,
          spaceBetween: 80,
        },
        '1600': {
          slidesPerView: 3,
          spaceBetween: 80,
        },
      }"
    >
      <SwiperSlide v-for="(slide, indx) in 7" :key="indx">
        <div
          class="swiper-bg"
          :style="{ backgroundImage: `url(${testImage})` }"
        >
          <div class="overlay"></div>
          <div class="box-content tw-my-5 tw-mx-10 tw-py-10 tw-px-10">
            <img class="tw-h-[18px]" :src="FirstPartnerIcon" alt="" />
            <h3
              class="tw-text-[22.875px] tw-mt-4 tw-text-primary font_tt_runs tw-font-black"
            >
              Company Name
            </h3>
            <p
              class="description tw-flex-col tw-mt-4 tw-text-primary font_tt_runs tw-font-normal"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsa
              unde sunt iure dolores blanditiis! Iusto nihil minima,
              exercitationem beatae voluptates eos excepturi, pariatur illo
              architecto molestias dignissimos illum error.Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Nisi ipsa unde sunt iure
              dolores blanditiis! Iusto nihil minima, exercitationem beatae
              voluptates eos excepturi, pariatur illo architecto molestias
              dignissimos illum error.
            </p>
            <div class="tw-flex tw-flex-col">
              <div class="divider"></div>
              <NuxtLink to="/" custom v-slot="{ navigate }">
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
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped lang="scss">
@import url("@/assets/styles/pages/_ourClients.scss");
</style>
