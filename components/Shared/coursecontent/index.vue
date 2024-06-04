<script lang="ts" setup>
import SDescriptionDetails from "./DescriptionDetails";
import STrailerVd from "./TrailerVd";
import ShortDesciption from "./ShortDesciption";
import Lessons from "./Lessons";
</script>
<template>
  <div>
    <CoreBaseContainer>
      <SDescriptionDetails />
    </CoreBaseContainer>
    <STrailerVd />
    <CoreBaseContainer>
      <ShortDesciption />
      <Lessons />
    </CoreBaseContainer>
  </div>
</template>
