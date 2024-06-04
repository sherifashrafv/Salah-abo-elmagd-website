<script setup lang="ts">
import Rotation from "@/components/Shared/Rotation";
import Sponserd from "@/components/Shared/Sponsers";
import CourseContent from "@/components/Shared/coursecontent/index";
import TrailerVd from "@/components/Shared/coursecontent/TrailerVd";
import Slider from "@/components/Shared/Slider.vue";
import SFaqs from "@/components/WebSite/home/SFaqs";
import SHostedBy from "@/components/WebSite/home/SHostedBy";
import STestimonials from "@/components/WebSite/home/STestimonials";
import BookReview from "@/components/WebSite/learn/BookReview";
</script>
<template>
  <section class="tw-my-44">
    <CoreBaseContainer>
      <Rotation title="Leadership Course" />
      <Sponserd />
    </CoreBaseContainer>
    <CourseContent />
    <div class="tw-my-24">
      <Slider :content="true" />
    </div>
    <Rotation title="Sales Hackers Book" />
    <Sponserd />
    <CoreBaseContainer>
      <BookReview />
    </CoreBaseContainer>
    <div class="tw-my-24">
      <Slider title="My Books Are Available On" :content="false" />
    </div>
    <CoreBaseContainer>
      <div class="tw-mt-64">
        <STestimonials />
      </div>
      <SHostedBy />
      <SFaqs />
    </CoreBaseContainer>
  </section>
</template>
