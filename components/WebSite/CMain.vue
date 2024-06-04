<script lang="ts" setup>
import Intro from "@/components/WebSite/home/SIntro";
import SCard from "@/components/Shared/Cards";
import SMilestones from "@/components/WebSite/home/SMilestones";
import OurCompany from "@/components/Shared/OurCompany";
import SResources from "@/components/WebSite/home/SResources";
import STestimonials from "@/components/WebSite/home/STestimonials";
import SHostedBy from "@/components/WebSite/home/SHostedBy";
import SFaqs from "@/components/WebSite/home/SFaqs";
import SCountries from "@/components/WebSite/home/SCountries";
import SClinets from "@/components/Shared/SClients.vue";
</script>

<template>
  <main class="tw-pt-[9rem]">
    <CoreBaseContainer>
      <intro />
      <div class="tw-grid tw-gap-10 tw-grid-cols-3 tw-mt-10 tw-items-stretch">
        <s-card />
      </div>
      <div class="tw-mt-[20rem]">
        <s-milestones />
      </div>
      <OurCompany />
      <SClinets />
      <SResources />
      <STestimonials />
      <SHostedBy />
    </CoreBaseContainer>
    <SCountries />
    <CoreBaseContainer>
      <SFaqs />
    </CoreBaseContainer>
  </main>
</template>
