<script lang="ts" setup>
import BaseButton from "~/components/Core/BaseButton.vue";
import CourseContent from "~/components/Shared/coursecontent/CourseContent.vue";
const contents = ref([
  {
    title: "Strategy",
  },
  {
    title: "Design",
  },
  {
    title: "Visual identity",
  },
  {
    title: "Communication",
  },
  {
    title: "Strategy",
  },
  {
    title: "Design",
  },
  {
    title: "Visual identity",
  },
  {
    title: "Communication",
  },
]);
const details = ref([
  {
    desc: "300 Pages",
  },
  {
    desc: "Release Date: 21/1/2024",
  },
]);
</script>

<template>
  <section class="tw-my-24">
    <div class="tw-grid tw-grid-cols-2 tw-items-center tw-gap-14">
      <div class="_bookReview-img">
        <span class="overlay" />
        <img src="~/assets/img/learn/_salah_photo.jpg" alt="" />
      </div>
      <div class="tw-flex tw-flex-col">
        <h1 class="book-title">Book Name Headline.</h1>
        <h1
          class="font_tt_runs tw-text-primary tw-font-bold tw-text-[14.625px] tw-mt-5"
        >
          Course content:
        </h1>
        <div class="tw-flex tw-gap-5 tw-flex-wrap tw-mt-5">
          <div v-for="(content, indx) in contents" :key="indx">
            <div class="tw-flex tw-items-center tw-gap-2">
              <h4
                class="tw-text-[8.2px] tw-text-primary font_tt_runs tw-font-bold"
              >
                0{{ indx + 1 }}
              </h4>
              <h1
                class="font_tt_runs tw-text-primary tw-font-normal tw-text-[14.625px]"
              >
                {{ content.title }}
              </h1>
            </div>
          </div>
        </div>
        <div class="tw-flex tw-gap-5 tw-flex-wrap tw-mt-5">
          <div
            v-for="(content, indx) in details"
            :key="indx"
            class="course-details"
          >
            {{ content.desc }}
          </div>
        </div>
        <div class="tw-mt-10">
          <BaseButton
            hover="#000"
            span="#fff"
            color="#000"
            bgColor="#c79a7b"
            :width="180"
            :height="45"
          >
            <span class="tw-z-50 tw-font-extrabold"> BUY NOW </span>
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import url("@/assets/styles/pages/learn/_bookReview.scss");
</style>
