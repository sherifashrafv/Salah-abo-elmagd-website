<script lang="ts" setup>
import BaseButton from "~/components/Core/BaseButton.vue";
import FAQsComp from "~/components/Shared/FAQs.vue";
</script>
<template>
  <section class="tw-my-36">
    <div class="tw-grid tw-grid-cols-2">
      <div>
        <h4
          class="tw-text-primary font_tt_runs tw-mb-10 tw-font-black tw-text-[56px]"
        >
          Frequently Asked Questions
        </h4>
        <BaseButton
          hover="#000"
          span="#fff"
          color="#000"
          bgColor="#c79a7b"
          :width="140"
          :height="40"
        >
          <span class="tw-z-50 tw-font-extrabold"> More Contact </span>
        </BaseButton>
      </div>
      <div>
        <FAQsComp />
      </div>
    </div>
  </section>
</template>

<style></style>
