<script setup>
import Animate from "@/components/WebSite/services/SAnimate";
import SAchivments from "@/components/WebSite/services/SAchivments";
import SServices from "@/components/WebSite/services/SServices";
import Rotation from "@/components/Shared/Rotation";
import Sponserd from "@/components/Shared/Sponsers";
import Banner from "@/components/Shared/Banner";
import OurCompany from "@/components/Shared/OurCompany";
import ServicesDetails from "@//components/WebSite/services/SServiceDetails";
import BaseContainer from "@/components/core/BaseContainer";
import STestimonials from "@/components/WebSite/home/STestimonials.vue";
import SFaqs from "@/components/WebSite/home/SFaqs.vue";
</script>
<template>
  <div>
    <BaseContainer>
      <Animate />
      <SAchivments />
      <SServices />
      <Rotation title="ONE TO ONE CONSULTATION" />
      <Sponserd />
      <ServicesDetails />
      <Banner />
      <OurCompany />
      <div class="tw-my-32">
        <STestimonials />
      </div>
      <SFaqs />
    </BaseContainer>
  </div>
</template>
