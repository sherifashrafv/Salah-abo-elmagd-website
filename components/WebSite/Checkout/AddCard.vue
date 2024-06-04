<script  setup>
import BaseButton from "~/components/Core/BaseButton.vue";
</script>

<template>
    <section>
        <div class="lg:tw-px-0 tw-mb-5">
            <h1
                class="tw-font-semibold tw-text-fifith lg:tw-text-[30px] tw-text-[20px] tw-mb-[50px] font_tt_runs tw-px-5 lg:tw-px-0">
                Add card
            </h1>
            <div class="tw-px-[30px] tw-py-[55px]  tw-bg-primaryBg tw-rounded-[6px]">

                <n-form ref="formRef" class="lg:tw-grid lg:tw-grid-cols-2 tw-gap-5">
                    <n-form-item label="Card Number*" path="" class="tw-col-span-2 ">
                        <n-input placeholder="Enter Card Number" />
                    </n-form-item>
                    <n-form-item label="Expiry Date*" path="">
                        <n-input placeholder="Expiry Date"   />
                    </n-form-item>

                    <n-form-item label="CVV*" path="">
                        <n-input placeholder="CVV*" />
                    </n-form-item>
                   
                    <n-form-item label="Cardholders Name*" path="" class="tw-col-span-2 ">
                        <n-input placeholder="Enter Cardholders Name" />
                    </n-form-item>
                    <n-form-item>
                        <BaseButton hover="white" span="#000" color="#000" bgColor="#c79a7b" :height="55"
                            class="tw-mt-0 tw-w-full">
                            <span class="tw-z-50 tw-font-black font_tt_runs "> Complete Purchase </span>
                        </BaseButton>
                    </n-form-item>
                </n-form>
            </div>
        </div>
    </section>
</template>