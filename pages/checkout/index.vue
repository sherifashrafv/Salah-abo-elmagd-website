<script setup>
import checkoutForm from "~/components/WebSite/Checkout/CheckoutForm.vue";
import OrderSummary from "~/components/WebSite/Checkout/OrderSummary.vue";
import TotalItems from "~/components/WebSite/Checkout/TotalItems.vue";
import AddCard from "~/components/WebSite/Checkout/AddCard.vue";

const beforeCheckout = ref(false);

const checkoutContinue = () => {
    beforeCheckout.value = true;
};
</script>
<template>
    <div class="tw-container  tw-py-[200px]">
        <div class="lg:tw-px-0 tw-px-[20px]">
            <div class="lg:tw-grid lg:tw-grid-cols-3 tw-gap-10">
                <div class="tw-col-span-2">
                    <TotalItems v-if="beforeCheckout"/>
                    <AddCard  v-if="beforeCheckout"/>
                    <checkoutForm v-else @hideCheckoutForm="checkoutContinue" />

                </div>
                <div>
                    <OrderSummary />
                </div>
            </div>
        </div>
    </div>
</template>
