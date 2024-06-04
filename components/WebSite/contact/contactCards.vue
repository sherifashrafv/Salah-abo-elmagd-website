<template>
    <section>
        <div class="tw-container lg:tw-px-0 tw-px-[20px]">
            <div class="lg:tw-grid lg:tw-grid-cols-3 tw-gap-10">
                <div class="tw-card tw-my-[30px] tw-bg-[#242424] tw-px-[34px] tw-py-[58px] tw-text-center">
                    <phoneIcon />
                    <div class="tw-mt-[25px]">
                        <h1 class="tw-text-primary tw-text-[20px] tw-mb-[15px]">
                            +1-316-555-0116
                        </h1>
                        <h1 class="tw-text-primary">
                            +1-316-555-0116
                        </h1>
                    </div>
                </div>
                <div class="tw-card tw-my-[30px] tw-bg-[#242424] tw-px-[34px] tw-py-[58px] tw-text-center">
                    <EmailIcon />
                    <div class="tw-mt-[25px]">
                        <h1 class="tw-text-primary tw-text-[20px] tw-mb-[15px]">
                            contact@example.com
                        </h1>
                        <h1 class="tw-text-primary">
                            hr@example.com
                        </h1>
                    </div>
                </div>
                <div class="tw-card tw-my-[30px] tw-bg-[#242424] tw-px-[34px] tw-py-[58px] tw-text-center">
                    <LocationIcon />
                    <div class="tw-mt-[25px]">
                        <h1 class="tw-text-primary tw-text-[20px] tw-mb-[15px]">
                            8502 Preston Rd. Ingle, Maine 98380, USA
                        </h1>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import PhoneIcon from "~/components/Icons/PhoneIcon.vue"
import EmailIcon from "~/components/Icons/EmailIcon.vue"
import LocationIcon from "~/components/Icons/LocationIcon.vue"

</script>