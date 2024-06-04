<script lang="ts" setup>
defineProps<{
  card: [];
  nums: number;
}>();
</script>
<template>
  <div class="services-card">
    <h5>0{{ nums }}</h5>
    <h3 class="font_tt_runs">{{ card.title }}</h3>
  </div>
</template>

<style lang="scss" scoped>
@import url("@/assets/styles/pages/services/_services_card.scss");
</style>
