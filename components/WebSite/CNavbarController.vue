<script lang="ts" setup>
import LoginModal from "./auth/Login.vue";
import SignupModal from "./auth/Signup.vue";

import BaseButton from "~/components/Core/BaseButton.vue";
const active = ref(false);
const loginModalVisible = ref(false);
const signupModalVisible = ref(false);
 
const openLoginModal = () => {
  loginModalVisible.value = true;
};

const closeLoginModal = () => {
  loginModalVisible.value = false;
};

const openSignupModal = () => {
  signupModalVisible.value = true;
  loginModalVisible.value = false;  
};

const closeSignupModal = () => {
  signupModalVisible.value = false;
  loginModalVisible.value = true;
};
</script>
<template>
  <div class="tw-flex tw-gap-5 tw-items-center">
    <BaseButton hover="#000" span="#fff" color="#000" bgColor="#c79a7b" :width="140" :height="50"
    @click="openLoginModal">
      <span class="tw-z-50 tw-font-extrabold"> Join Now </span>
    </BaseButton>
    <div class="lang_switcher tw-cursor-pointer">
      <img src="@/assets/svg/_arabic.svg" class="tw-w-full tw-h-full tw-object-scale-down" alt=" ar-switcher" />
    </div>
    <div class="theme_switcher tw-cursor-pointer">
      <img src="@/assets/svg/_light_mode.svg" class="tw-w-full tw-h-full tw-object-scale-down" alt=" theme_switcher" />
    </div>
    <LoginModal  v-model:show="loginModalVisible"  @openSignup="openSignupModal" @closeLogin="closeLoginModal"/>
    <SignupModal v-model:show="signupModalVisible"  @closeSignup="closeSignupModal" />

  </div>
</template>

<style>
.lang_switcher,
.theme_switcher {
  @apply tw-flex tw-items-center tw-justify-center tw-h-[50px] tw-w-[50px];
  background: var(--primary-bg-card);
}
</style>