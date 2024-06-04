<script lang="ts" setup>
import gsap from "gsap";
import BaseButton from "~/components/Core/BaseButton.vue";
import FirstPartnerIcon from "~/assets/svg/partner_2.svg";
import SecoundPartnerIcon from "~/assets/svg/partner_1.svg";
import ThirdPartnerIcon from "~/assets/svg/partner_3.svg";
const partners = ref([
  {
    icon: FirstPartnerIcon,
  },
  {
    icon: ThirdPartnerIcon,
  },
  {
    icon: SecoundPartnerIcon,
    size: 220,
  },
  {
    icon: SecoundPartnerIcon,
  },
  {
    icon: FirstPartnerIcon,
    size: 220,
  },
  {
    icon: ThirdPartnerIcon,
  },
  {
    icon: SecoundPartnerIcon,
  },
  {
    icon: FirstPartnerIcon,
    size: 220,
  },
  {
    icon: ThirdPartnerIcon,
  },
]);
</script>
<template>
  <section class="tw-mt-72">
    <div class="tw-grid tw-grid-cols-2">
      <div class="_partners-wrapper">
        <h4
          class="tw-text-primary tw-text-[56px] font_tt_runs tw-font-extrabold"
        >
          Our Partners
        </h4>
        <p
          class="tw-pe-96 tw-text-primary tw-my-5 tw-text-[20px] tw-font-normal"
        >
          We are digital agency that helps businesses develop immersive and
          engaging user experiences
        </p>
        <BaseButton
          hover="white"
          span="#000"
          color="#000"
          bgColor="#c79a7b"
          :width="140"
          class="tw-mt-10"
        >
          <span class="tw-z-50 tw-font-extrabold"> Work with me </span>
        </BaseButton>
      </div>
      <div class="tw-grid tw-gap-10 tw-grid-cols-3">
        <div
          v-for="(ico, indx) in partners"
          :key="indx"
          class="tw-bg-primaryBg tw-flex tw-items-center tw-justify-center tw-px-10 tw-py-16"
        >
          <img :src="ico.icon" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.partner-icons {
  fill: var(--primary) !important;
}
</style>
