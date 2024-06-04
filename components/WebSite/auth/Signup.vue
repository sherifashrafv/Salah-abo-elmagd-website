<script setup>
import { defineEmits } from 'vue';
import BaseButton from "~/components/Core/BaseButton.vue";

const emits = defineEmits(['closeSignup']);
const closeSignupModal = () => {
    emits('closeSignup');
};
</script>
<template>
    <n-modal>

        <n-card class="tw-h-full tw-overflow-y-auto tw-py-[80px]" :bordered="false" role="dialog" aria-modal="true">
            <template #header-extra>
            </template>
            <div class="tw-w-full">
                <img class="tw-object-cover tw-mb-5" src="~/assets/svg/fullLogo.svg" alt="" />
                <h1 class="tw-font-bold tw-text-[20px] tw-mb-[24px] font_tt_runs">
                    Create account
                </h1>
                <n-form ref="formRef" class=" ">
                    <n-form-item label="User Name">
                        <n-input placeholder="Enter your name" />
                    </n-form-item>
                    <n-form-item label="Email Address">
                        <n-input placeholder="Email Address" />
                    </n-form-item>
                    <n-form-item label="Phone Number">
                        <n-input placeholder="Enter Phone Number" />
                    </n-form-item>
                    <n-form-item label="Password">
                        <n-input placeholder="Enter password"  type="password" show-password-on="click" />
                    </n-form-item>

                    <n-form-item label="Confirm Password">
                        <n-input placeholder="Enter password"  type="password" show-password-on="click" />
                    </n-form-item>


                    <n-form-item class="border-t">
                        <BaseButton hover="white" span="#000" color="#2A2A2A" bgColor="#c79a7b"
                            class="tw-mt-0 !tw-w-full ">
                            <span class="tw-z-50 tw-font-extrabold tw-font-black font_tt_runs tw-py-[6px]">
                                CREATE ACCOUNT
                            </span>
                        </BaseButton>
                    </n-form-item>
                </n-form>
                <div class="tw-text-center">
                    <span class="tw-text-[12px] tw-text-primary">
                        Already have an account?
                    </span>
                    <n-button @click="closeSignupModal" text class="tw-text-[12px] hover:!tw-text-primary tw-text-fifith tw-ms-1">
                        Login now
                    </n-button>
                </div>
            </div>
        </n-card>
    </n-modal>
</template>


<style>
.n-card.n-modal {
    @apply lg:tw-w-[450px] tw-w-full tw-fixed tw-h-full tw-z-[99999];
    right: 0;
    top: 0;
    background: var(--primary-bg-card);
    border-radius: 0;
}

.n-card__content {
    @apply tw-flex tw-justify-center tw-items-center tw-flex-col;
}

.n-card__content h1 {
    color: var(--fifith-color)
}

.border-b {
    border-bottom: 1px solid rgba(223, 210, 192, 0.09)
}
</style>