<script lang="ts" setup>
import UnLockedIc from "@/components/Ui/UnLocked";
import LockedIc from "@/components/Ui/LockedIcon";
import BaseButton from "~/components/Core/BaseButton.vue";

const lessons = ref([
  {
    id: 1,
    title: "Lesson 1",
    locked: true,
  },
  {
    id: 1,
    title: "Lesson 2",
    locked: false,
  },
  {
    id: 1,
    title: "Lesson 3",
    locked: false,
  },
  {
    id: 1,
    title: "Lesson 4",
    locked: false,
  },
  {
    id: 1,
    title: "Lesson 5",
    locked: false,
  },
  {
    id: 1,
    title: "Lesson 6",
    locked: false,
  },
  {
    id: 1,
    title: "Lesson 7",
    locked: false,
  },
  {
    id: 1,
    title: "Lesson 8",
    locked: false,
  },
]);
</script>
<template>
  <section class="tw-my-24">
    <div class="lessons-wrapper">
      <div class="_lesson-card" v-for="lesson in lessons" :key="lesson.id">
        <div class="content">
          <n-icon
            :size="30"
            :component="lesson.locked ? UnLockedIc : LockedIc"
          />
          <div class="--content-wrapper">
            <h1 class="lesson-heading">{{ lesson.title }}</h1>
            <h4 class="_duration">15:00 Min</h4>
          </div>
        </div>
        <div class="_description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          voluptatem, fugiat dolorem quibusdam ullam non vitae eum, at, iure
          quam facilis assumenda! Dolores aut cumque iure quos. Asperiores,
          incidunt necessitatibus!
        </div>
      </div>
    </div>
    <div class="tw-flex tw-justify-center tw-mt-24">
      <BaseButton
        hover="#000"
        span="#fff"
        color="#000"
        bgColor="#c79a7b"
        :width="300"
        :height="50"
      >
        <span class="tw-z-50 tw-font-extrabold"> BUY NOW </span>
      </BaseButton>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import url("@/assets/styles/shared/_lessons.scss");
</style>
