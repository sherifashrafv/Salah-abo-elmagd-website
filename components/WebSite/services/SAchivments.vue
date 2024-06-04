<script lang="ts" setup>
import CountUp from "vue-countup-v3";
</script>
<template>
  <section class="achivments-wrapper">
    <div class="achivments-box">
      <div class="font_tt_runs">
        <count-up :end-val="250"></count-up>
        K
      </div>
      <p>Mindset Building</p>
    </div>
    <div class="achivments-box">
      <div class="font_tt_runs">
        <count-up :end-val="500"></count-up>
        M
      </div>
      <p>PUBLIC SPEAKING & CORPORATE TRAININGS</p>
    </div>
    <div class="achivments-box">
      <div class="font_tt_runs">
        <count-up :end-val="500"></count-up>
        %
      </div>
      <p>CAPACITY BUILDING PROGRAM</p>
    </div>
  </section>
</template>

<style lang="scss">
@import url("@/assets/styles/pages/services/_achivments.scss");
</style>
