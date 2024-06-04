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
    ".hosted_by_title",
    { opacity: 0.3 },
    {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".hosted_by_title",
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
  <section class="tw-my-52">
    <h1
      class="tw-mt-20 hosted_by_title heading tw-text-primary tw-uppercase font_tt_runs"
    >
      SALAH WAS HOSTED BY
    </h1>

    <div class="tw-my-32 tw-mt-32">
      <!-- <div class="tw-grid tw-gap-4">
        <div class="image-container tw-rounded-ss-[12.48px]">
          <div class="image-overlay"></div>
          <img src="~/assets/img/home/screens/Screens.png" alt="Description" />
        </div>
        <div class="image-container tw-rounded-ee-[12.48px]">
          <div class="image-overlay"></div>
          <img
            src="~/assets/img/home/screens/Screens_22.png"
            alt="Description"
          />
        </div>
        <div class="image-container tw-rounded-bl-[12.48px]">
          <div class="image-overlay"></div>
          <img
            src="~/assets/img/home/screens/Screens_3.png"
            alt="Description"
          />
        </div>
      </div>
      <div class="tw-grid tw-gap-4">
        <div class="image-container tw-h-[150px] tw-rounded-[12.48px]">
          <div class="image-overlay"></div>
          <img
            clas=""
            src="~/assets/img/home/screens/Screens_3.png"
            alt="Description"
          />
        </div>
        <div
          class="image-container tw-h-[700px] tw-rounded-[12.48px] tw-overflow-hidden tw-rounded-ee-[12.48px]"
        >
          <div class="image-overlay"></div>
          <img src="~/assets/img/home/screens/Screens_22.png" />
        </div>
        <div class="image-container tw-h-[600px]">
          <div class="image-overlay"></div>
          <img
            src="~/assets/img/home/screens/Screens_334.png"
            alt="Description"
          />
        </div>
        <div class="image-container tw-h-[250px] tw-rounded-[12.48px]">
          <div class="image-overlay"></div>
          <img
            src="~/assets/img/home/screens/Screens_555.png"
            alt="Description"
            class="tw-object-cover tw-object-top"
          />
        </div>
      </div>
      <div class="tw-grid tw-gap-4">
        <div
          class="image-container -tw-mt-[221px] tw-rounded-[12.48px] tw-overflow-hidden tw-rounded-ee-[12.48px]"
        >
          <div class="image-overlay"></div>
          <img src="~/assets/img/home/screens/Screens_22.png" />
        </div>
        <div class="image-container tw-h-[700px] tw-rounded-[12.48px]">
          <div class="image-overlay"></div>
          <img
            src="~/assets/img/home/screens/Screens_555.png"
            alt="Description"
            class="tw-object-cover tw-object-top"
          />
        </div>
        <div class="image-container tw-h-[730px] tw-rounded-bl-[12.48px]">
          <div class="image-overlay"></div>
          <img
            src="~/assets/img/home/screens/Screens_3.png"
            alt="Description"
          />
        </div>
        <div class="image-container tw-h-[80px] tw-overflow-hidden">
          <div class="image-overlay"></div>
          <img
            src="~/assets/img/home/screens/Screens_22.png"
            class="tw-object-cover tw-object-bottom"
          />
        </div>
      </div> -->
      <div class="tw-relative">
        <img
          src="@/assets/img/home/Salah_aboelmagd.gif"
          class="tw-h-full tw-w-full tw-opacity-[50%]"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
._overlay_aimated_layer {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
}
// .image-container {
//   position: relative;
//   display: inline-block;
//   overflow: hidden;
// }

// .image-overlay {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.5);
//   background-blend-mode: multiply;
//   pointer-events: none;
// }

// .image-container img {
//   display: block;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   object-position: left center;
// }
</style>
