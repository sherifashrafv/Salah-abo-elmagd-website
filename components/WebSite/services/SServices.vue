<script lang="ts" setup>
import BaseButton from "~/components/Core/BaseButton.vue";
import ServicesCard from "~/components/Shared/ServicesCard";
const cards = ref([
  {
    title: "ONE TO ONE CONSULTATION",
  },
  {
    title: "CORPORATE TRAINING",
  },
  {
    title: "PERSONAL BRANDING",
  },
  {
    title: "Emotional Intelligence",
  },
  {
    title: "Negotiation Skills",
  },
  {
    title: "BOOKS",
  },
]);
</script>
<template>
  <section class="tw-mb-36 tw-mt-64">
    <div class="tw-flex tw-items-center tw-justify-between">
      <h1 class="tw-text-primary tw-text-[60px] tw-font-black">
        CHECK OUR SERVICES
      </h1>
      <BaseButton
        hover="#000"
        span="#fff"
        color="#000"
        bgColor="#c79a7b"
        :width="140"
        :height="50"
      >
        <span class="tw-z-50 tw-font-extrabold"> Contact Me </span>
      </BaseButton>
    </div>
    <!-- start:cards -->
    <section class="tw-mt-32">
      <services-card
        v-for="(card, idx) in cards"
        :card="card"
        :nums="idx + 1"
        :key="idx"
      />
    </section>
    <!-- end:cards -->
  </section>
</template>

<style></style>
