<script lang="ts" setup></script>
<template>
  <section class="tw-my-24">
    <div class="modal-wrapper">
      <video loop autoplay defaultmuted preload="none" playsinline muted>
        <source src="@/assets/videos/_test_2.mp4" type="video/mp4" />
      </video>
      <span class="modal_overlay" />
      <div class="tw-flex tw-flex-col">
        <div class="trigger_video _action">
          <div class="_play font_tt_runs">play</div>
          <div class="font_tt_runs tw-mt-5">Play trailer</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.modal-wrapper {
  @apply tw-relative tw-h-[700px] tw-overflow-hidden;
  video {
    @apply tw-w-full tw-h-full tw-object-cover;
  }
  .modal_overlay {
    @apply tw-flex tw-justify-center tw-items-center tw-top-0 tw-w-full tw-absolute tw-left-0 tw-h-full;
    background-color: rgb(36 36 36 / 63%);
  }
  .trigger_video {
    @apply tw-absolute tw-flex tw-flex-col tw-top-0 tw-justify-center tw-items-center tw-w-full tw-h-full tw-left-0;
    ._play {
      @apply tw-uppercase tw-px-3 tw-text-primary tw-text-[20px] tw-italic tw-h-[100px] tw-bg-[#000000]  tw-rounded-full tw-w-[100px] tw-flex tw-items-center tw-justify-center;
      background: rgba($color: #000000, $alpha: 25%);
    }
  }
}
</style>
