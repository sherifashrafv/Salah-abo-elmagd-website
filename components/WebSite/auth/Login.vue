<script lang="ts" setup>
import { defineEmits } from 'vue';
import BaseButton from "~/components/Core/BaseButton.vue";

const emits = defineEmits(['openSignup', 'closeLogin']);
const openSignupModal = () => {
    emits('openSignup');
    closeLoginModal()
};

const closeLoginModal = () => {
    emits('closeLogin');
};
</script>
<template>
    <n-modal class="tw-h-full tw-overflow-y-auto  ">

        <n-card :bordered="false" role="dialog" aria-modal="true">
            <template #header-extra>
            </template>
            <div class="tw-w-full">
                <img class="tw-object-cover tw-mb-5" src="~/assets/svg/fullLogo.svg" alt="" />
                <h1 class="tw-font-bold tw-text-[20px] tw-mb-[24px] font_tt_runs">
                    login to your account
                </h1>
                <n-form ref="formRef" class=" ">
                    <n-form-item label="Email Address">
                        <n-input placeholder="Email Address" />
                    </n-form-item>
                    <n-form-item label="Password">
                        <n-input placeholder="Enter password" type="password" show-password-on="click" />
                    </n-form-item>
                    <div class="tw-text-end tw-pb-[35px] tw-pt-[18px]  ">
                        <n-button text class="tw-text-[12px] tw-text-primary hover:!tw-text-fifith  ">
                            Forgot password?
                        </n-button>
                    </div>

                    <n-form-item class="border-t">
                        <BaseButton hover="white" span="#000" color="#2A2A2A" bgColor="#c79a7b"
                            class="tw-mt-0 !tw-w-full ">
                            <span class="tw-z-50 tw-font-extrabold tw-font-black font_tt_runs tw-py-[6px]">
                                LOGIN
                            </span>
                        </BaseButton>
                    </n-form-item>
                </n-form>
                <div class="tw-text-center">
                    <span class="tw-text-[12px] tw-text-primary">
                        Dont have an account?
                    </span>
                    <n-button @click="openSignupModal" text
                        class="tw-text-[12px] hover:!tw-text-primary tw-text-fifith tw-ms-1">
                        Sign up now
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
</style>