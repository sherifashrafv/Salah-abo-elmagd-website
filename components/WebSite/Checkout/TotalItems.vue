<script lang="ts" setup>
import Trash from "~/components/Icons/Trash.vue"
const value = ref(null);

const items = ref<string[]>([
    {
        id: 1,
        itemImg: "data:image/jpeg;base64,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",
        name: " Leadership Skills"
    } 
])

const options = [{
    label: '1',
    value: '1'
}, {
    label: '2',
    value: '2'
},];


const RemoveItem = (index: number) => {
    items.value.splice(index, 1);
}
</script>
<template>
    <div class="lg:tw-px-0 tw-mb-[50px]" v-if="items.length > 0">
        <h1
            class="tw-font-semibold tw-text-fifith lg:tw-text-[30px] tw-text-[20px] tw-mb-[50px] font_tt_runs tw-px-5 lg:tw-px-0">
            Total items
        </h1>

        <div class="tw-card  tw-bg-primaryBg tw-rounded-[6px] tw-px-[26px] tw-py-[35px] ">
            <div class="lg:tw-grid lg:tw-grid-cols-3 tw-gap-5" v-for="(item, index) in items" :key="index">
                <div>
                    <img :src="item.itemImg" class="tw-w-full tw-h-[150px] tw-object-cover" alt="">
                </div>
                <div class="tw-col-span-2">
                    <div class="tw-flex tw-justify-between tw-pt-4">
                        <h2 class="tw-text-primary tw-text-22px font_tt_runs tw-font-bold">
                            {{ item.name }}
                        </h2>
                        <n-button @click="RemoveItem(index)" text
                            class="hover:!tw-text-primary tw-text-[15px] !tw-font-light tw-font-Proxima btn-remove">
                            <Trash class="tw-me-2" />
                            Remove
                        </n-button>
                    </div>
                    <div class="lg:tw-flex tw-mt-4">
                        <div class="tw-me-5">
                            <span class="tw-text-[16px] tw-text-fifith !tw-font-light tw-font-Proxima">
                                Author :
                            </span>
                            <span class="tw-text-[16px] tw-text-primary !tw-font-light tw-font-Proxima">
                                Salah aboelmagd
                            </span>

                        </div>
                        <div>

                            <span class="tw-text-[16px] tw-text-fifith !tw-font-light tw-font-Proxima">
                                Category :
                            </span>
                            <span class="tw-text-[16px] tw-text-primary !tw-font-light tw-font-Proxima">
                                Business
                            </span>
                        </div>
                    </div>
                    <div class=" tw-flex tw-mt-4">
                        <div class="tw-me-5 tw-my-auto">
                            <span
                                class="tw-text-primary tw-line-through tw-text-[14px] tw-mb-1 tw-block tw-font-medium">
                                300.00$
                            </span>
                            <span class="tw-text-primary tw-text-[14px]  tw-block tw-opacity-50 tw-font-medium">
                                200.00$
                            </span>
                        </div>
                        <div class="tw-me-5 tw-w-[55px] items">
                            <n-select v-model:value="value" :options="options" placeholder="" />
                        </div>
                        <div class="tw-my-auto">
                            <span class="tw-text-fifith tw-text-[21px] ">
                                200$
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.btn-remove {
    color: #C79A7B8F;
}

.items {
    .n-base-selection-label {
        background-color: transparent !important;
        border-radius: 6px !important;
        --n-border-hover: none !important;
        --n-border-focus: none !important;
        --n-border: none !important;
        --n-color-focus: var(--bg) !important;
        --n-box-shadow-focus: none !important;
        font-family: "Proxima Nova" !important;
        border: 1px solid rgba(134, 146, 166, 0.28) !important;
        box-shadow: none !important;

        .n-base-selection-input {
            .n-base-selection-input__content {
                color: var(--primary);
                font-size: 17px;
            }
        }
    }

}
</style>