<script lang="ts" setup></script>
<template>
  <div class="modal-wrapper">
    <video
      class="modal_vedio tw-w-full"
      defaultmuted
      preload="none"
      playsinline
      muted
    >
      <source src="@/assets/videos/_test_2.mp4" type="video/mp4" />
    </video>
    <!-- <span class="overlay_modal"></span> -->
  </div>
</template>

<style scoped lang="scss">
.modal-wrapper {
  @apply tw-relative;
  .overlay_modal {
    @apply tw-absolute tw-left-0 tw-h-full tw-bg-black tw-opacity-50;
  }
}
</style>
