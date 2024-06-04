<script setup>
import SCard from "@/components/Shared/Cards";
import SCountries from "@/components/WebSite/home/SCountries";
import SMilestones from "@/components/WebSite/home/SMilestones";
import SResources from "@/components/WebSite/home/SResources";
import STestimonials from "@/components/WebSite/home/STestimonials";
import SHostedBy from "@/components/WebSite/home/SHostedBy";
import SFaqs from "@/components/WebSite/home/SFaqs";
import Rotation from "@/components/Shared/3DEffecctRotation";
</script>
<template>
  <section class="tw-my-52">
    <CoreBaseContainer>
      <h1
        class="title tw-uppercase tw-font-black tw-text-center tw-text-primary lg:tw-text-[56px] tw-text-[30px] tw-mb-[100px] font_tt_runs"
      >
        About Me
      </h1>
      <p
        class="tw-text-primary tw-text-center tw-m-auto tw-w-[990px] tw-text-[19px] tw-font-normal"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries
      </p>
      <Rotation />
      <!-- ############# -->
      <SMilestones />
      <!--#############  -->
      <!--  -->
      <h1
        class="tw-uppercase tw-mt-32 tw-font-black tw-text-center tw-my-48 tw-text-primary lg:tw-text-[56px] tw-text-[30px] tw-mb-[100px] font_tt_runs"
      >
        SALAH’S SERVICES
      </h1>
      <div class="tw-grid tw-gap-10 tw-grid-cols-3 tw-mt-10 tw-items-stretch">
        <s-card />
      </div>
    </CoreBaseContainer>
    <div class="tw-my-44">
      <SCountries />
      <CoreBaseContainer>
        <SResources />
        <div class="tw-my-36">
          <STestimonials />
        </div>

        <SHostedBy />
        <SFaqs />
      </CoreBaseContainer>
    </div>
  </section>
</template>
