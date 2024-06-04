<script lang="ts" setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
onMounted(async () => {
  gsap.fromTo(
    "._testimonials_heading",
    { opacity: 0.3 },
    {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "._testimonials_heading",
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
  <section class="_testimonials">
    <h1
      class="tw-mt-20 heading tw-text-primary _testimonials_heading font_tt_runs"
    >
      Testimonials
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
          slidesPerView: 1,
          spaceBetween: 30,
        },
        '640': {
          slidesPerView: 1,
          spaceBetween: 20,
        },

        '768': {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        '1024': {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        '1200': {
          slidesPerView: 2,
          spaceBetween: 80,
        },
        '1600': {
          slidesPerView: 2,
          spaceBetween: 80,
        },
      }"
    >
      <SwiperSlide v-for="(slide, indx) in 7" :key="indx">
        <div class="swiper-bg tw-bg-[#242424]">
          <div class="overlay"></div>
          <div class="box-content tw-my-5 tw-mx-10 tw-py-10 tw-px-10">
            <img
              class="tw-h-[18px]"
              src="~/assets/svg/testimonials.svg"
              alt=""
            />
            <p
              class="tw-mt-4 tw-text-[24px] tw-text-white font_tt_runs tw-font-normal"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div class="tw-flex tw-flex-col">
              <div class="divider"></div>
              <NuxtLink to="/" custom v-slot="{ navigate }">
                <div
                  class="tw-flex tw-gap-5 details-box tw-w-fit tw-cursor-pointer tw-items-center tw-mt-7"
                >
                  <h3
                    @click="navigate()"
                    class="tw-text-primary tw-text-[20px] font_tt_runs tw-font-black tw-uppercase"
                  >
                    Mohamed Ahmed
                  </h3>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style lang="scss" scoped>
@import url("@/assets/styles/pages/_testimonials.scss");
</style>
