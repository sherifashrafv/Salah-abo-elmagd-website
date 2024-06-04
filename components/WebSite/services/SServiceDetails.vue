<script lang="ts" setup>
import BaseButton from "~/components/Core/BaseButton.vue";
</script>
<template>
  <section class="tw-flex tw-gap-10 tw-justify-between">
    <div class="services-wrapper-details tw-grow tw-flex tw-justify-center">
      <img
        class="tw-w-[528px] tw-opacity-50 tw-sticky tw-top-[10rem] tw-object-cover tw-h-[442px]"
        src="@/assets/img/services/_img_1.jpg"
      />
    </div>
    <div class="services-wrapper-details tw-grow">
      <h4
        class="tw-text-primary tw-capitalize tw-font-bold tw-text-[12.625px] font_tt_runs"
      >
        Service Details
      </h4>
      <p class="tw-my-4 tw-text-primary tw-text-[20.375px]">
        As part of the Norwegian government's efforts to get audiences back to
        cinemas after the pandemic, the Norwegian Film Institute allocated extra
        funds to measures that would contribute to an increase in audience
        visits to cinemas and film festivals across Norway.
      </p>

      <p class="tw-my-4 tw-mt-8 tw-text-primary tw-text-[20.375px]">
        As part of the Norwegian government's efforts to get audiences back to
        cinemas after the pandemic, the Norwegian Film Institute allocated extra
        funds to measures that would contribute to an increase in audience
        visits to cinemas and film festivals across Norway.
      </p>
      <h4
        class="tw-text-primary tw-mt-14 tw-mb-7 tw-capitalize tw-font-bold tw-text-[12.625px] font_tt_runs"
      >
        Remarking Services
      </h4>
      <p class="tw-my-4 tw-mt-8 tw-text-primary tw-text-[20.375px]">
        As part of the Norwegian government's efforts to get audiences back to
        cinemas after the pandemic, the Norwegian Film Institute allocated extra
        funds to measures that would contribute to an increase in audience
        visits to cinemas and film festivals across Norway.
      </p>
      <p class="tw-my-4 tw-mt-8 tw-text-primary tw-text-[20.375px]">
        As part of the Norwegian government's efforts to get audiences back to
        cinemas after the pandemic, the Norwegian Film Institute allocated extra
        funds to measures that would contribute to an increase in audience
        visits to cinemas and film festivals across Norway.
      </p>
      <BaseButton
        class="tw-my-10"
        hover="#000"
        span="#fff"
        color="#000"
        bgColor="#c79a7b"
        :width="140"
        :height="43"
      >
        <span class="tw-z-50 tw-font-extrabold"> READ MORE</span>
      </BaseButton>
      <img src="@/assets/img/services/_img_2.png" alt="" />
      <h4
        class="tw-text-primary tw-mt-14 tw-mb-7 tw-capitalize tw-font-bold tw-text-[12.625px] font_tt_runs"
      >
        Solutions
      </h4>
      <p class="tw-my-4 tw-mt-8 tw-text-primary tw-text-[20.375px]">
        As part of the Norwegian government's efforts to get audiences back to
        cinemas after the pandemic, the Norwegian Film Institute allocated extra
        funds to measures that would contribute to an increase in audience
        visits to cinemas and film festivals across Norway.
      </p>
    </div>
  </section>
</template>

<style>
.services-wrapper-details {
  width: calc(100% / 2);
}
</style>
