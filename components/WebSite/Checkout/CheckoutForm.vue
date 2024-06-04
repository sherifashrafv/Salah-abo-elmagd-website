<template>
    <section>
        <div class="lg:tw-px-0 tw-mb-5">
            <h1
                class="tw-font-bold tw-text-primary lg:tw-text-[30px] tw-text-[20px] tw-mb-[50px] font_tt_runs tw-px-5 lg:tw-px-0">
                Checkout
            </h1>
            <div class="tw-px-[30px] tw-py-[55px]  tw-bg-primaryBg tw-rounded-[6px]">

                <n-form ref="formRef" class="lg:tw-grid lg:tw-grid-cols-2 tw-gap-5">
                    <n-form-item label="Your full name*" path="">
                        <n-input placeholder="Enter your full name" />
                    </n-form-item>
                    <n-form-item label="Email address*" path="">
                        <n-input placeholder="Enter email address" type="" />
                    </n-form-item>
                    <n-form-item label="Phone number" path="">
                        <vue-tel-input v-model="phone" mode="international"></vue-tel-input>
                    </n-form-item>
                    <n-form-item label="Your address" path="">
                        <n-input placeholder="Your address" />
                    </n-form-item>
                    <n-form-item label="Country of residence" path="">
                        <n-select v-model:value="value" :options="options" />
                    </n-form-item>
                    <n-form-item label="City" path="">
                        <n-select v-model:value="value" :options="options" />
                    </n-form-item>
                    <n-form-item label="State" path="">
                        <n-select v-model:value="value" :options="options" />
                    </n-form-item>
                    <n-form-item label="Zip code" path="">
                        <n-input placeholder="Enter Zip code" />
                    </n-form-item>
                    <n-form-item>
                        <BaseButton @click="checkoutContinue" hover="white" span="#000" color="#000" bgColor="#c79a7b"
                            :height="55" class="tw-mt-0 tw-w-full">
                            <span class="tw-z-50 tw-font-black font_tt_runs "> Continue </span>
                        </BaseButton>
                    </n-form-item>
                </n-form>
            </div>
        </div>
    </section>
</template>
<script setup>
import BaseButton from "~/components/Core/BaseButton.vue";
import { VueTelInput } from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'
const emits = defineEmits(['hideCheckoutForm']);
const checkoutContinue = () => {
    emits('hideCheckoutForm');
};
</script>

<style lang="scss">
.vue-tel-input {
    width: 100%;
    font-family: "Proxima Nova" !important;

    .vti__input {
        background-color: transparent;
        color: var(--primary) !important;
        font-family: var(--font-en);

        &::placeholder {
            color: rgba(223, 210, 192, 0.26);
            text-transform: capitalize;
        }
    }

    .vti__dropdown-list {
        background: var(--bg);
        border: none;

        .vti__dropdown-item.highlighted {
            background-color: var(--fourth-bg)
        }
    }
}

.vti__dropdown.open,
.vti__dropdown:hover {
    background-color: transparent;
}
</style>
