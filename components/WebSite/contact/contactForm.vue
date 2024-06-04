<template>
    <section>
        <div class=" tw-container tw-pt-[20px] lg:tw-px-0 tw-px-[20px]">
            <div class="lg:tw-p-[100px] tw-p-[30px] tw-bg-[#242424]">

                <h1 class="tw-uppercase tw-font-black tw-text-primary tw-text-[22px] tw-mb-[35px] font_tt_runs">
                    Send us a message
                </h1>
                <n-form ref="formRef" class="lg:tw-grid lg:tw-grid-cols-2 tw-gap-5">
                    <n-form-item label="Your Name" path="">
                        <n-input placeholder="Enter your full name" />
                    </n-form-item>
                    <n-form-item label="Email address" path="">
                        <n-input placeholder="Enter your email address" />
                    </n-form-item>
                    <n-form-item label="Phone number" path="">
                        <n-input placeholder="Enter your phone number" />
                    </n-form-item>
                    <n-form-item label="Company name" path="">
                        <n-input placeholder="Enter your company name" />
                    </n-form-item>
                    <n-form-item label="Your Message" path="" class="tw-col-span-2 ">
                        <n-input type="textarea" placeholder="Enter your message" />
                    </n-form-item>
                    <n-form-item>
                        <BaseButton hover="white" span="#000" color="#000" bgColor="#c79a7b" :width="140"
                            class="tw-mt-0">
                            <span class="tw-z-50 tw-font-extrabold"> SEND MESSAGE </span>
                        </BaseButton>
                    </n-form-item>
                </n-form>
            </div>
        </div>
    </section>
</template>
<script setup>
import BaseButton from "~/components/Core/BaseButton.vue";

</script>
